/**
 * 例子：
 * Ext.data.Store 过滤数据（filterBy 使用方法）。
 * filterBy 方法有过滤点 store 的数据的作用。
 * 方法执行后的结果是：过滤掉 false 的数据，保留下 true 的数据。
 */
Ext.define('User', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'firstName',
		type : 'string'
	}, {
		name : 'lastName',
		type : 'string'
	}, {
		name : 'age',
		type : 'int'
	}, {
		name : 'eyeColor',
		type : 'string'
	} ]
});
var myData = {
	'num' : '201202334009'
};

var myStore = Ext.create('Ext.data.Store', {
	model : 'User',
	data : [ {
		firstName : 'Peter',
		lastName : 'Venkman'
	}, {
		firstName : '201202334009',
		lastName : 'Spengler'
	}, {
		firstName : 'Ray',
		lastName : 'Stantz'
	}, {
		firstName : 'Winston',
		lastName : 'Zeddemore'
	} ],
	autoLoad : true,
	listeners : {
		scope : this,
		load : function(store) {
			// 过滤掉 false 的数据，保留下 true 的数据。
			store.filterBy(function(record) {
				if (myData.num === record.data.firstName) {
					return true;
				} else {
					return false;
				}

			});
		},
	}

});

Ext.create('Ext.grid.Panel', {
	title : 'Simpsons',
	store : myStore,
	columns : [ {
		text : 'firstName',
		dataIndex : 'firstName'
	}, {
		text : 'lastName',
		dataIndex : 'lastName',
		flex : 1
	} ],
	height : 200,
	width : 400,
	renderTo : Ext.getBody()
});