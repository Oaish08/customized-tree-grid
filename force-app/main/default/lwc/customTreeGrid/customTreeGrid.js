import { LightningElement } from 'lwc';
import { COLUMNS, testData } from './sampleData';

export default class CustomTreeGrid extends LightningElement {
	columns = COLUMNS;

	gridData = testData;

	selectAllCheckbox;

	connectedCallback() {
		let records = [...this.gridData];
		records
			.filter((item) => item.disableCheckbox === false)
			.map((item) => {
				item.ariaSelected = false;
				item._children
					.filter((item) => item.disableCheckbox === false)
					.map((child) => (child.ariaSelected = false));
			});
		this.gridData = [...records];
	}

	handleExpandCollapse(event) {
		const index = this.gridData.findIndex((item) => item.id === event.target.dataset.recordId);
		let records = [...this.gridData];
		records[index] = { ...records[index], ariaExpanded: !records[index].ariaExpanded };

		this.gridData = [...records];
	}

	handleSelectAll(event) {
		this.selectAllCheckbox = event.target.checked;
		let records = [...this.gridData];
		if (this.selectAllCheckbox) {
			records
				.filter((item) => item.disableCheckbox === false)
				.map((item) => {
					item.ariaSelected = event.target.checked;
					item.rowClass = 'slds-hint-parent slds-is-selected';
					item._children
						.filter((item) => item.disableCheckbox === false)
						.map((child) => {
							child.ariaSelected = event.target.checked;
							child.rowClass = 'slds-hint-parent slds-is-selected';
						});
				});
		} else {
			records
				.filter((item) => item.disableCheckbox === false)
				.map((item) => {
					item.ariaSelected = event.target.checked;
					item.rowClass = 'slds-hint-parent';
					item._children
						.filter((item) => item.disableCheckbox === false)
						.map((child) => {
							child.ariaSelected = event.target.checked;
							child.rowClass = 'slds-hint-parent';
						});
				});
		}
		this.gridData = [...records];
	}

	handleExpenseSelect(event) {
		let selectedItem = this.gridData.find((item) => item.id === event.target.dataset.recordId);

		selectedItem.ariaSelected = event.target.checked;
		if (event.target.checked) {
			selectedItem.rowClass = 'slds-hint-parent slds-is-selected';
			selectedItem._children
				.filter((item) => item.disableCheckbox === false)
				.map((item) => {
					item.ariaSelected = event.target.checked;
					item.rowClass = 'slds-hint-parent slds-is-selected';
				});
		} else {
			selectedItem.rowClass = 'slds-hint-parent';
			selectedItem._children
				.filter((item) => item.disableCheckbox === false)
				.map((item) => {
					item.ariaSelected = event.target.checked;
					item.rowClass = 'slds-hint-parent';
				});
		}

		this.gridData = [...this.gridData];

		this.shouldSelectAll(event.target.checked);
	}

	handleAttachmentSelect(event) {
		let selectedItem = this.gridData
			.filter((item) => item.disableCheckbox === false)
			.find((item) =>
				item._children.find((child) => child.id === event.target.dataset.recordId)
			);

		const index = selectedItem._children.findIndex(
			(item) => item.id === event.target.dataset.recordId
		);
		let records = [...selectedItem._children];
		if (event.target.checked) {
			records[index] = {
				...records[index],
				ariaSelected: event.target.checked,
				rowClass: 'slds-hint-parent slds-is-selected'
			};
		} else {
			records[index] = {
				...records[index],
				ariaSelected: event.target.checked,
				rowClass: 'slds-hint-parent'
			};
		}
		selectedItem._children = [...records];

		let selectedItems = selectedItem._children.filter(
			(item) => item.ariaSelected === event.target.checked
		);

		if (event.target.checked) {
			if (
				selectedItems.length ===
				selectedItem._children.filter((item) => item.disableCheckbox === false).length
			) {
				selectedItem.ariaSelected = event.target.checked;
				selectedItem.rowClass = 'slds-hint-parent slds-is-selected';
				this.shouldSelectAll(event.target.checked);
			}
		} else {
			selectedItem.ariaSelected = event.target.checked;
			selectedItem.rowClass = 'slds-hint-parent';
			this.selectAllCheckbox = event.target.checked;
		}

		this.gridData = [...this.gridData];
	}

	shouldSelectAll(checkedBox) {
		let selectedItems = this.gridData.filter((item) => item.ariaSelected === checkedBox);

		if (checkedBox) {
			if (
				selectedItems.length ===
				this.gridData.filter((item) => item.disableCheckbox === false).length
			) {
				this.selectAllCheckbox = checkedBox;
			}
		} else {
			this.selectAllCheckbox = checkedBox;
		}
	}
}
