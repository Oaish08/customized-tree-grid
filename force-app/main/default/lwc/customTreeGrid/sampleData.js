export const COLUMNS = [
	{
		label: 'Expense Number',
		fieldName: 'expenseNumber',
		columnWidth: 'Expense Number Column Width',
		columnWidthId: '1'
	},
	{
		label: 'File Name',
		fieldName: 'fileName',
		columnWidth: 'File Name Column Width',
		columnWidthId: '2'
	},
	{
		label: 'File Size (In Bytes)',
		fieldName: 'fileSize',
		columnWidth: 'File Size Column Width',
		columnWidthId: '3'
	},
	{
		label: 'Content Type',
		fieldName: 'contentType',
		columnWidth: 'Content Type Column Width',
		columnWidthId: '4'
	},
	{
		label: 'File Description',
		fieldName: 'fileDescription',
		columnWidth: 'File Description Column Width',
		columnWidthId: '5'
	}
];

export const testData = [
	{
		id: 'a1y1g000000cqyPAAQ',
		expenseNumber: 'EXP-55',
		ariaExpanded: false,
		ariaLevel: '1',
		ariaPosinset: '1',
		ariaSelected: false,
		ariaSetsize: 3,
		checkBoxText: 'Expand EXP-55',
		disableCheckbox: false,
		rowClass: 'slds-hint-parent',
		_children: [
			{
				id: 'a1y1g000000ciMaAAJ',
				attachmentName: 'Air Ticket',
				fileSize: '53184',
				contentType: 'PDF',
				description: 'Airface',
				ariaLevel: '2',
				ariaPosinset: '1',
				ariaSelected: false,
				ariaSetsize: 2,
				disableCheckbox: true,
				rowClass: 'slds-hint-parent'
			},
			{
				id: 'a1y1g000000ciMaAAK',
				attachmentName: 'Air Ticket',
				fileSize: '53184',
				contentType: 'PNG',
				description: 'Airface',
				ariaLevel: '2',
				ariaPosinset: '2',
				ariaSelected: false,
				ariaSetsize: 2,
				disableCheckbox: false,
				rowClass: 'slds-hint-parent'
			}
		]
	},
	{
		id: 'a1y1g000000cqySAAQ',
		expenseNumber: 'EXP-58',
		ariaExpanded: false,
		ariaLevel: '1',
		ariaPosinset: '2',
		ariaSelected: false,
		ariaSetsize: 3,
		checkBoxText: 'Expand EXP-58',
		disableCheckbox: true,
		rowClass: 'slds-hint-parent'
	},
	{
		id: 'a1y1g000000cqyVAAQ',
		expenseNumber: 'EXP-61',
		ariaExpanded: false,
		ariaLevel: '1',
		ariaPosinset: '3',
		ariaSelected: false,
		ariaSetsize: 3,
		checkBoxText: 'Expand EXP-61',
		disableCheckbox: false,
		rowClass: 'slds-hint-parent',
		_children: [
			{
				id: 'a1y1g000000ciMaAAO',
				attachmentName: 'Air Ticket',
				fileSize: '53184',
				contentType: 'PDF',
				description: 'Airface',
				ariaLevel: '2',
				ariaPosinset: '1',
				ariaSelected: false,
				ariaSetsize: 3,
				disableCheckbox: true,
				rowClass: 'slds-hint-parent'
			},
			{
				id: 'a1y1g000000ciMaAAP',
				attachmentName: 'Air Ticket',
				fileSize: '53184',
				contentType: 'PNG',
				description: 'Airface',
				ariaLevel: '2',
				ariaPosinset: '2',
				ariaSelected: false,
				ariaSetsize: 3,
				disableCheckbox: false,
				rowClass: 'slds-hint-parent'
			},
			{
				id: 'a1y1g000000ciMaAAQ',
				attachmentName: 'Air Ticket',
				fileSize: '53184',
				contentType: 'PNG',
				description: 'Airface',
				ariaLevel: '2',
				ariaPosinset: '3',
				ariaSelected: false,
				ariaSetsize: 3,
				disableCheckbox: false,
				rowClass: 'slds-hint-parent'
			}
		]
	}
];
