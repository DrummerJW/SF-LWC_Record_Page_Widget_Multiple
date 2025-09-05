
# recordFieldCard_Multiple LWC

## Overview
`recordFieldCard_Multiple` is a Lightning Web Component (LWC) designed to display and edit multiple fields on most Salesforce standard object record pages. It is configurable and can be reused for different objects and sets of fields by passing the appropriate API names as properties.

## Features
- Display and edit multiple fields for most standard Salesforce objects
- Customizable card title and icon
- Customizable success and error toast notifications
- Spinner indicator during save

## Usage Instructions

### 1. Add the Component to a Record Page
1. Deploy the component to your Salesforce org (see Deployment below).
2. In Salesforce, navigate to the Lightning App Builder for the desired record page.
3. Drag the `recordFieldCard_Multiple` component onto the page.
4. In the component properties panel, set the following (each field and label is set individually):
	- **cardTitle**: (Optional) Title to display on the card
	- **icon**: (Optional) SLDS icon name (e.g., `standard:opportunity`)
    - **summary**: (Optional) Summary text to display at the top of the card
	- **fieldApiName1**: API name of the first field to display/edit (e.g., `StageName`)
	- **field1**: (Optional) Custom display name for the first field (e.g., `Stage`)
	- **fieldApiName2**: API name of the second field (optional)
	- **field2**: (Optional) Custom display name for the second field
	- **fieldApiName3**: API name of the third field (optional)
	- **field3**: (Optional) Custom display name for the third field
	- **fieldApiName4**: API name of the fourth field (optional)
	- **field4**: (Optional) Custom display name for the fourth field
	- **fieldApiName5**: API name of the fifth field (optional)
	- **field5**: (Optional) Custom display name for the fifth field
	- **toastpass**: (Optional) Custom success message

<img width="720" height="1223" alt="image" src="https://github.com/user-attachments/assets/aa125e06-4dbf-42b3-b125-b1cfaaebf2f8" />


### 2. Example Property Values
- `objectApiName`: `Opportunity`
- `summary`: `Key details for this opportunity.`
- `fieldApiName1`: `StageName`
- `field1`: `Stage`
- `fieldApiName2`: `CloseDate`
- `field2`: `Close Date`
- `fieldApiName3`: `Amount`
- `field3`: `Deal Amount`
- `cardTitle`: `Opportunity Details`
- `icon`: `standard:opportunity`


## Deployment Instructions Using VS Code and Manifest File

You can deploy the component using VS Code and a manifest file (`package.xml`):

1. Open the project in VS Code with Salesforce Extensions installed.
2. Make sure you are authorized to your org:
	- Open the Command Palette (Ctrl+Shift+P) and run `SFDX: Authorize an Org`.
3. Right-click the `manifest/package.xml` file and select `SFDX: Deploy Source in Manifest to Org`.
4. Wait for the deployment to complete. You will see the results in the Output panel.

This will deploy all metadata listed in your `package.xml`, including the `recordFieldCard_Multiple` LWC.



### Using Change Sets
1. Add the `recordFieldCard_Multiple` LWC folder to a change set.
2. Upload and deploy the change set to your target org.



## Notes
- Make sure the user has field-level security access to the fields you want to display/edit.
- The component can be reused for any set of fields by setting the `fieldApiName1`–`fieldApiName5` properties in the App Builder.
- You can display as few as 1 or as many as 5 fields; the component will adjust its layout automatically.
- Use the `field1`–`field5` properties to set user-friendly display names for each field (optional).

## Author
Joshua Withers  
GitHub: https://github.com/DrummerJW
