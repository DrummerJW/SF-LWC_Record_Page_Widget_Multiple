//Title:          recordFieldCard_Multiple
//Details:        LWC to display and edit multiple fields on a record page.
//Author:         Joshua Withers
//Github:         https://github.com/DrummerJW
//Date:           10/2024
//Version:        1.0

import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class recordFieldCard_Multiple extends LightningElement {
    @api recordId;           
    @api cardTitle;          
    @api icon;               
    @api summary;           
    @api field1;              
    @api field2;              
    @api field3;              
    @api field4;              
    @api field5;              
    @api fieldApiName1;      
    @api fieldApiName2;      
    @api fieldApiName3;      
    @api fieldApiName4;      
    @api fieldApiName5;      
    @api objectApiName;
    @api toastpass;  

    isSaving = false; 

    handleSuccess(event) {
        this.isSaving = false; // Hide spinner on success
        const message = this.toastpass && this.toastpass.trim() !== ''
            ? this.toastpass 
            : 'Record has been updated successfully.'; // Default fallback message

        const toastEvent = new ShowToastEvent({
            title: 'Success!',
            message: message,
            variant: 'success',
        });
        this.dispatchEvent(toastEvent);
    }

    handleError(event) {
        this.isSaving = false; // Hide spinner on error
        const toastEvent = new ShowToastEvent({
            title: 'Error!',
            message: 'Failed to update the Opportunity field.',
            variant: 'error',
        });
        this.dispatchEvent(toastEvent);
    }

    handleSave(event) {
        event.preventDefault(); // Prevent default submit behavior
        this.isSaving = true;   // Show spinner when submitting
        const fields = event.detail.fields; // Capture form fields for submission
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
}