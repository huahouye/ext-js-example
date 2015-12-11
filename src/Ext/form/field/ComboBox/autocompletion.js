/**
 * Ext.form.field.ComboBox，自动过滤。 就是根据输入的内容，下拉显示对应关键字的选项。
 */
Ext.application({
	name : 'Fiddle',

	launch : function() {
		var simpleCombo = Ext.create('Ext.form.field.ComboBox', {
			fieldLabel : 'Select a single state',
			displayField : 'name',
			valueField : 'abbr',
			width : 320,
			labelWidth : 130,
			queryMode : 'local',
			typeAhead : true,
			minChars : 2,
			name : 'agentDownline',
			store : new Ext.data.SimpleStore({
				fields : [ 'abbr', 'name', 'slogan' ],
				data : [ [ 'VA', 'Virginia', 'Mother of States' ],
						[ 'WA', 'Washington', 'Green Tree State' ],
						[ 'WV', 'West Virginia', 'Mountain State' ],
						[ 'WI', 'Wisconsin', 'America\'s Dairyland' ],
						[ 'WY', 'Wyoming', 'Like No Place on Earth' ] ]
			}),
			listeners : {
				buffer : 50,
				change : function() {
					this.expand();
					var store = this.store;
					// store.suspendEvents();
					store.clearFilter();
					// store.resumeEvents();
					store.filter({
						property : 'name',
						anyMatch : true,
						value : this.getValue()
					});
				}
			}
		});

		Ext.create('Ext.window.Window', {
			title : 'Hello',
			height : 200,
			width : 400,
			items : simpleCombo
		}).show();
	}
});