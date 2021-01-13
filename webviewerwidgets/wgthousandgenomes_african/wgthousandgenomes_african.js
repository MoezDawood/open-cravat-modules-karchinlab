widgetGenerators['thousandgenomes_african'] = {
	'variant': {
		'width': 250, 
		'height': 200, 
		'function': function (div, row, tabName) {
			var yri_af = getWidgetData(tabName, 'thousandgenomes_african', row, 'yri_af')
			if (yri_af== null) {
                var span = getEl('span');
                span.classList.add('nodata');
				addEl(div, addEl(span, getTn('No data')));
                return;
			}
            addBarComponent(div, row, 'YRI Allele Frequency', 'thousandgenomes_african__yri_af', tabName);
            addBarComponent(div, row, 'LWK Allele Frequency', 'thousandgenomes_african__lwk_af', tabName);
            addBarComponent(div, row, 'GWD Allele Frequency', 'thousandgenomes_african__gwd_af', tabName);
            addBarComponent(div, row, 'MSL Allele Frequency', 'thousandgenomes_african__msl_af', tabName);
            addBarComponent(div, row, 'ESN Allele Frequency', 'thousandgenomes_african__esn_af', tabName);
            addBarComponent(div, row, 'ASW Allele Frequency', 'thousandgenomes_african__asw_af', tabName);
            addBarComponent(div, row, 'ACB Allele Frequency', 'thousandgenomes_african__acb_af', tabName);
		}
	}
}