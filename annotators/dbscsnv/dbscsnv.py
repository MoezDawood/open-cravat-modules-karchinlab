import sys
from cravat import BaseAnnotator
from cravat import InvalidData
import sqlite3
import os

class CravatAnnotator(BaseAnnotator):
    def annotate(self, input_data, secondary_data=None):
        q = 'select ada_score, rf_score from {chr} where pos = {pos} and ref = "{ref}" and alt = "{alt}"'.format(
            chr = input_data["chrom"], pos = int(input_data["pos"]), ref = input_data["ref_base"], alt = input_data["alt_base"])
        self.cursor.execute(q)
        row = self.cursor.fetchone()
        if row:
            out = {'ada_score': row[0], 'rf_score': row[1]}
        else:
            out = None
        return out

    
    def cleanup(self):
        pass
        
if __name__ == '__main__':
    annotator = CravatAnnotator(sys.argv)
    annotator.run()