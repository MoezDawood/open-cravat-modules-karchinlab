widgetGenerators['fathmm'] = {
	'variant': {
		'width': 380, 
		'height': 180, 
		'default_hidden': true,
		'function': function (div, row, tabName) {
			var value = getWidgetData(tabName, 'fathmm', row, 'fathmm_rscore');
			if (value == null) {
                var span = getEl('span');
                span.classList.add('nodata');
				addEl(div, addEl(span, getTn('No data')));
                return;
			}
			addInfoLine(div, 'FATHMM Converted Rank Score', getWidgetData(tabName, 'fathmm', row, 'fathmm_rscore'), tabName);
			var tid = getWidgetData(tabName, 'fathmm', row, 'ens_tid');
			var tidls = tid != null ? tid.split(';') : [];
			var pid = getWidgetData(tabName, 'fathmm', row, 'ens_pid');
			var pidls = pid != null ? pid.split(';') : [];
			var score = getWidgetData(tabName, 'fathmm', row, 'fathmm_score');
			var scorels = score != null ? score.split(';') : [];
			for (var i=0;i<scorels.length;i++){
				if (scorels[i] == '.'){
					scorels[i] = null;
				}
			}
			var pred = getWidgetData(tabName, 'fathmm', row, 'fathmm_pred');
			var predls = pred != null ? pred.split(';') : [];
			for(var i=0;i<predls.length;i++){
				if(predls[i] == '.'){
					predls[i] = null;
				}
			}
			var table = getWidgetTableFrame();
			addEl(div, table);
			var thead = getWidgetTableHead(['Transcript', 'Protein', 'Score', 'Prediction'],['35%','35%','15%','15%']);
			addEl(table, thead);
			var tbody = getEl('tbody');
			addEl(table, tbody);
			for (var i =0; i<tidls.length;i++){
				var tiditr = tidls[i];
				var piditr = pidls[i];
				var sitr = scorels[i];
				var pitr = predls[i];
				var tr = getWidgetTableTr([tiditr, piditr, sitr, pitr]);
				addEl(tbody, tr);
			}
			addEl(div, addEl(table, tbody));
		}
	}
}
