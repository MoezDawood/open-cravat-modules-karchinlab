import sys
from cravat import BaseAnnotator
from cravat import InvalidData
import sqlite3
import os

class CravatAnnotator(BaseAnnotator):

    def setup(self): 
        dir_path = os.path.dirname(os.path.realpath(__file__))
        db_path = os.path.join(dir_path, "data", "phylop100-phylop20_sqlite.db")
        self.conn = sqlite3.connect(db_path)
        self.curs = self.conn.cursor()
        assert isinstance(self.conn, sqlite3.Connection)
        assert isinstance(self.curs, sqlite3.Cursor)
    
    def annotate(self, input_data, secondary_data=None):
        out = {}
        stmt = 'SELECT phylop100_vert, phylop100_vert_r, phylop20_mamm, phylop20_mamm_r FROM {chr} WHERE pos = {pos} AND alt = "{alt}"'.format(chr=input_data["chrom"], pos=int(input_data["pos"]), alt = input_data["alt_base"])
        self.curs.execute(stmt)
        row = self.curs.fetchone()
        if row is not None:
            out['phylop100_vert'] = float(row[0])
            out['phylop100_vert_r'] = float(row[1])
            out['phylop20_mamm'] = float(row[2])
            out['phylop20_mamm_r'] = float(row[3])
        return out
    
    def cleanup(self):
        self.conn.close()
        pass
        
if __name__ == '__main__':
    annotator = CravatAnnotator(sys.argv)
    annotator.run()