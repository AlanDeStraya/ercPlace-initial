import React from 'react';

import { useState } from 'react';

import Weather from '../Components/weather.js';
import Sidebar from '../Components/sidebar.js';
import PrintPopup from '../Components/printPopup.js';
import ScadaPopup from '../Components/scadaPopup.js';
import SiteUpdatesPopup from '../Components/siteUpdatesPopup.js';


const SharepointPlus = ({ siteUpdatesPopupActive, setSiteUpdatesPopupActive }) => {

	const [printPopupActive, setPrintPopupActive] = useState(false);
	const [scadaPopupActive, setScadaPopupActive] = useState(false);
	const [alert, setAlert] = useState('');

	function closePopups() {
		setPrintPopupActive(false);
		setScadaPopupActive(false);
		setSiteUpdatesPopupActive(false);
	};

	document.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
				closePopups();
		}
	});



	return (
		<div id='sharepointPlus'>
			{alert && <p id='plus-alert'></p>}
			<article>

				<Weather />

				<section>
					<sub id='rules'></sub>
					<h2>Rules</h2>
					<ul>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Electric%20Rail%20Operating%20Rules.pdf' target='_blank' rel="noreferrer">Rule Book</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/SitePages/Rule-Interpretations.aspx' target='_blank' rel="noreferrer">Rule Interpretations</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?viewid=56f9737f%2D90ba%2D488a%2D95b4%2D5c89a9190c57&siteid=%7B9F3D765B%2DF6C6%2D42B8%2D829C%2D48774268CF1D%7D&webid=%7BA5B7FA5B%2DF68A%2D4A43%2D9A9C%2DF235B73A1207%7D&uniqueid=%7BE3ACD87C%2D0408%2D4578%2D923A%2D4D600E89DB6A%7D' target='_blank' rel="noreferrer">Active Bulletins</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation&viewpath=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FForms%2FAllItems%2Easpx&FilterField1=OCT%5Fx0020%5FOperational%5Fx0020%5FDocument%5Fx0020%5FType&FilterValue1=Confederation%20Control%20Bulletin&FilterType1=Lookup&FilterDisplay1=Confederation%20Control%20Bulletin&viewid=bc80df01%2D823b%2D4aba%2Da1f9%2D13e8c7ddfa17' target='_blank' rel="noreferrer">Control Bulletins</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/OCTSP/CCKBRail/Rail%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents%2FOLRT%5FProject%5FSOR%5FRev%2E79%2Epdf&parent=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents' target='_blank' rel="noreferrer">Thales SOR (Safe Operating Requirements)</a></li>
					</ul>
				</section>

				<section>
					<sub id='workInstructions'></sub>
					<h2>Work Instructions <a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?FilterField1=OCT%5Fx0020%5FOperational%5Fx0020%5FDocument%5Fx0020%5FType&FilterValue1=Work%20Instruction&FilterType1=Lookup&FilterDisplay1=Work%20Instruction&viewid=bc80df01%2D823b%2D4aba%2Da1f9%2D13e8c7ddfa17' target='_blank' rel="noreferrer">(All Here)</a></h2>
					<h3>Emergency</h3>
					<ul>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Fire%20or%20Smoke%20Incidents.pdf' target='_blank' rel="noreferrer">Fire and Smoke</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Train%20Human%20Contact.pdf' target='_blank' rel="noreferrer">Train Human Contact</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Bomb%20Threat.pdf' target='_blank' rel="noreferrer">Bomb Threat</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Civil%20Unrest.pdf' target='_blank' rel="noreferrer">Civil Unrest/Riot</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Suspicious%20Package.pdf' target='_blank' rel="noreferrer">Suspicious Package</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/CBRN%20-%20Chemical%20Biological%20Radiological%20and%20Nuclear%20Incident.pdf' target='_blank' rel="noreferrer">CBRNE (Chem, Bio, Radioax, Nuclear, Explosive)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Employee%20Emergency%20Alarm.pdf' target='_blank' rel="noreferrer">Employee Emergency Alarm</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Extreme%20Weather%20Events.pdf' target='_blank' rel="noreferrer">Extreme Weather Events</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/TOCCOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation%2FTOCC%2DS100%2D03%2DWI%2DRev1%2E0%2DSeismic%20Events%202017%2D11%2D22%2Epdf&parent=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation' target='_blank' rel="noreferrer">Seismic Events (Earthquakes)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/P%2025%20Radio%20Failure%20-%20Line%201.pdf?CT=1613417000354&OR=ItemsView&siteid={9F3D765B-F6C6-42B8-829C-48774268CF1D}&webid={A5B7FA5B-F68A-4A43-9A9C-F235B73A1207}&uniqueid={F819E995-B00A-4614-B5C9-5EFA32D53EB3}' target='_blank' rel="noreferrer">P25 Radio Failure</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FLine%20Of%20Sight%20Operations%20On%20The%20Confederation%20Line%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Line of Sight</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/Group%20By%20Document%20Type.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FSystem%20and%20Station%20Status%20and%20Failures%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Power Interruption (Section 9)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?q=gids&id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FResponding%20to%20Trespassers%20%26%20GIDS%20on%20the%20Confederation%20Line%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation&parentview=7' target='_blank' rel="noreferrer">Trespasser (GIDS)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/TOCCOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation%2FTOCC%2DS100%2D17%2DWI%2DRev1%2E0%2DEmployee%20Emergency%20Alarm%2D2018%2D01%2D09%2Epdf&parent=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation' target='_blank' rel="noreferrer">Employee Emergency Alarm (EA)</a></li>
					</ul>
					<h3>Procedural</h3>
					<ul>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/Group%20By%20Document%20Type.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FSystem%20and%20Station%20Status%20and%20Failures%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">System and Station Status and Failures</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/Group%20By%20Document%20Type.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FManaging%20Disturbed%20and%20Trailed%20Switch%20Zones%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Disturbed AND Trailed Switch</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/Group%20By%20Document%20Type.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FActivation%20of%20Line%201%20Back%20Up%20Control%20Center%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Activation of Backup Control Center (BCC)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/Group%20By%20Document%20Type.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FTemporary%20Speed%20Restrictions%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Temporary Speed Restrictions (TSR)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?FilterField1=OCT%5Fx0020%5FOperational%5Fx0020%5FDocument%5Fx0020%5FType&FilterValue1=Work%20Instruction&FilterType1=Lookup&FilterDisplay1=Work%20Instruction&id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FWork%20Zones%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Work Zones</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/TOCCOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation%2FTOCC%2DS100%2D24%2DWI%2DRev3%2E0%2DElevator%20and%20Escalator%20Failure%20or%20Incident%2D2019%2D10%2D21%2Epdf&parent=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation' target='_blank' rel="noreferrer">Escalator/Elevator Failures/Incidents</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/TOCCOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation%2FTOCC%2DQ090%2D02%2DSD%2DRev1%2E1%2DElectric%20Rail%20Controller%20Roles%20and%20Responsibilities%2D2019%2D12%2D17%2Epdf&parent=%2Fsites%2FRailOperations%2FTOCCOperationalDocumentation' target='_blank' rel="noreferrer">ERC Roles and Responsibilities</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?q=cctv&id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FClosed%20Circuit%20Television%20Control%20Line%201%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation&parentview=7' target='_blank' rel="noreferrer">CCTV</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?q=cctv&id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FTunnel%20Ventilation%20System%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation&parentview=7' target='_blank' rel="noreferrer">Tunnel Ventilation System (TVS)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Use%20of%20Non-Emergency%20TVS%20Modes.pdf?CT=1656884653816&OR=ItemsView' target='_blank' rel="noreferrer">Non-Emergency TVS</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?q=cctv&id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FEvacuations%20on%20the%20Confederation%20Line%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation&parentview=7' target='_blank' rel="noreferrer">Evacuations</a></li>
					</ul>
				</section>

				<section>
				<sub id='troubleshooting'></sub>
					<h2>Troubleshooting <a href='https://ottawacity.sharepoint.com/sites/RailOperations/SitePages/ERC-Troubleshooting.aspx' target='_blank' rel="noreferrer"> (Binder Versions Here)</a></h2>
					<ul>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FBrake%20Fault%20Troubleshooting%20%2D%20SD%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Brake Fault</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Forms/AllItems.aspx?id=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation%2FDoor%20Fault%20Troubleshooting%20%2D%20SD%2Epdf&parent=%2Fsites%2FRailOperationsDocumentControl%2FOCTOperationalDocumentation' target='_blank' rel="noreferrer">Door Fault</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Loss%20of%20CBTC%20Position%20Troubleshooting%20-%20SD.pdf?CT=1613412170017&OR=ItemsView&siteid={9F3D765B-F6C6-42B8-829C-48774268CF1D}&webid={A5B7FA5B-F68A-4A43-9A9C-F235B73A1207}&uniqueid={ACF852E8-2083-4ECD-867F-301DF3DA2584}' target='_blank' rel="noreferrer">Loss of CBTC Position</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/EDR%20Recovery%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">EDR</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Obstructed%20Motion%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">Obstructed Motion</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Pantograph%20Fault%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">Pantograph Fault</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Propulsion%20Fault%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">Propulsion (PCE) Fault</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/Track%20Brake%20Fault%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">Track Brake Fault</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperationsDocumentControl/OCTOperationalDocumentation/VOBC%20Failure%20Troubleshooting%20-%20SD.pdf' target='_blank' rel="noreferrer">VOBC Failure</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/WSS%20Reset%20Procedure.pdf?CT=1658943118360&OR=ItemsView' target='_blank' rel="noreferrer">WSS Reset Procedure</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/WSM%20Reset%20Procedure%20(Rev%20TS1).pdf?CT=1658943103037&OR=ItemsView' target='_blank' rel="noreferrer">WSM Reset Procedure (RVM code 4 or 5)</a></li>
					</ul>
				</section>

				<section>
				<sub id='misc'></sub>
					<h2>Misc</h2>
					<ul>
						<li><a href='http://toa.transit.local/TOA/OperatorRadios' target='_blank' rel="noreferrer"> Portable Radio LID List (TOA, signed out radios)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/RailOperations/_layouts/15/guestaccess.aspx?e=2dALMi&share=EZnqnvAyksdGj_6Q6ugxL4kBAbCKE9bGIgVJkMMXQqMNHQ' target='_blank' rel="noreferrer">LRV Radio LID List</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/RailOperations/KnowledgeBase/Active%20ERO%20List.docx?d=w37722feda15d4c12b5de9a33f11823d2&csf=1&web=1&e=M0egCH' target='_blank' rel="noreferrer">ERO List</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/Scheduling/Forms/Case%20View.aspx?id=%2Fsites%2FRailOperations%2FScheduling%2FLaunch%20and%20Reduction%20Confed&viewid=8691d665%2Dc171%2D4c2c%2Dacb3%2Df97532cde2b9' target='_blank' rel="noreferrer">Launch and Reduction Tables</a></li>
						<li><a href='http://ozonehome.city.a.ottawa.ca/irj/portal/OCForm' target='_blank' rel="noreferrer">Facilities Request Form</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/allContacts.xlsx?d=w4b57cd0052ae495cb8a5f14363bd6246&csf=1&web=1&e=o2BGJw' target='_blank' rel="noreferrer">All Contacts</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/RailOperations/_layouts/15/Doc.aspx?sourcedoc=%7B7C6AEBA8-0723-430A-9CDE-73B29F5F787D%7D&file=Rail%20Supervisor%20Schedule%202022.xlsx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Supervisor Schedule</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/OCTSP/CCKBRail/_layouts/15/Doc.aspx?sourcedoc=%7BB45F7C84-86CC-4D62-A562-D4F3C4CD5F34%7D&file=Rail%20scripts.docx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Operational Scripts</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/OCTSP/CCKBRail/_layouts/15/Doc.aspx?sourcedoc=%7B07ABB8D8-56BF-4B52-BBC0-736BB3A89BED%7D&file=Rail%20Power%20Scripts..docx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Power Scripts</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/OCTSP/CCKBRail/_layouts/15/Doc.aspx?sourcedoc=%7B247CDE3C-2DA8-4D51-B3FE-2C991D7A65DF%7D&file=Power%20Gap%20Reference.xlsx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Power Gap Track Segments</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/ContractManagement/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FContractManagement%2FConfederation%2FResponsibility%20Maps' target='_blank' rel="noreferrer">Area of Responsibility Maps</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/RailOperations/_layouts/15/Doc.aspx?sourcedoc=%7B31CF3874-9700-4680-B7B8-65E69A1CD6EA%7D&file=PayPhones.xlsx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Payphone info</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/OCTSP/CCKBRail/_layouts/15/Doc.aspx?sourcedoc=%7B8645C6DD-9234-4152-B080-7F1375DF86BF%7D&file=Confederation%20Line%20Facility%20Civic%20Addresses.xlsx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">Civic Addresses</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/R1%20stop%20locations.xlsx?d=wbac1ecf807364ad8837a115275d3ce4a&csf=1&web=1&e=e4MmNR' target='_blank' rel="noreferrer">R1 Bus stop locations</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/OCTSP/CCKBRail/Rail%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents%2FNew%20Guideway%20Map%2Epdf&parent=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents' target='_blank' rel="noreferrer">Guideway Map</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/RailOperations/_layouts/15/Doc.aspx?sourcedoc=%7BF80B68CC-54F5-42EF-9503-63672A477246%7D&file=RTM+and+Contractor+EROR+Training+Report.xlsx&action=default&mobileredirect=true' target='_blank' rel="noreferrer">List of Rules Qualified Personnel</a></li>
					</ul>
				</section>

				<section>
				<sub id='manuals'></sub>
					<h2>User Guides and Manuals</h2>
					<ul>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FKnowledgeBase%2FATS%20Workstation%20User%20Guide%2Epdf&parent=%2Fsites%2FRailOperations%2FKnowledgeBase' target='_blank' rel="noreferrer">ATS Workstation User Guide</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FKnowledgeBase%2FATC%20System%20User%20Guide%2Epdf&parent=%2Fsites%2FRailOperations%2FKnowledgeBase' target='_blank' rel="noreferrer">ATC System User Guide</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/OCTSP/CCKBRail/Rail%20Documents/Train%20Operator%20User%20Guide%20for%20SW%20Build%206.1-3.pdf' target='_blank' rel="noreferrer">Train Operator User Guide (Thales)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/OCTSP/CCKBRail/Rail%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents%2FCitadus%20Spirit%20Operating%20Guide%2Epdf&parent=%2Fsites%2FOCTSP%2FCCKBRail%2FRail%20Documents' target='_blank' rel="noreferrer">Train Operating Guide (Alstom)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FKnowledgeBase%2FSCADACOM%5F6%2E0%2E4%5FUser%5FGuide%2Epdf&parent=%2Fsites%2FRailOperations%2FKnowledgeBase' target='_blank' rel="noreferrer">SCADA user guide</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Forms/AllItems.aspx?id=%2Fsites%2FRailOperations%2FKnowledgeBase%2FTG%20Baker%20SCADA%20Desktop%20Training%2Epdf&parent=%2Fsites%2FRailOperations%2FKnowledgeBase' target='_blank' rel="noreferrer">TG Baker User Guide</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/IndigoVision%20Operator%20Guide.pdf?CT=1656960515004&OR=ItemsView' target='_blank' rel="noreferrer">IndigoVision</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Radio%20Console%20Training.pdf?CT=1656960669248&OR=ItemsView' target='_blank' rel="noreferrer">P25 radio console slides (sideways)</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/Fire%20Panel%20Training%20-%20Part%201.pdf?CT=1656960387385&OR=ItemsView' target='_blank' rel="noreferrer">Fire Panel</a></li><li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/KnowledgeBase/ONYX%20Workstation%20Training%20Notes.pdf?CT=1656960995079&OR=ItemsView' target='_blank' rel="noreferrer">ONYX Workstation Guide</a></li>
            <li><a href='https://ottawacity.sharepoint.com/:b:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Cisco%20Phone%20User%20Guide.pdf?csf=1&web=1&e=6MLNrX' target='_blank' rel='noreferrer'>City Cisco Phones</a></li>
					</ul>
				</section>

				<section>
					<sub id='teams'></sub>
					<h2>Teams Files</h2>
					<ul>
					<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/CommsInfoCard.docx?d=w3659851e90b0405095f2f59234f32605&csf=1&web=1&e=rkwqu4' target='_blank' rel="noreferrer">Comms Card</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Ongoing%20SCADA.xlsx?d=wa27f309285be4ab0be31bcc887fdeae7&csf=1&web=1&e=T5EmDg' target='_blank' rel="noreferrer">Ongoing SCADA issues spreadsheet</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Diversion%20Statistics%20for%20CS%20Messaging.docx?d=w92ef5a8baa394409b23fe851438307b8&csf=1&web=1&e=8nkddq' target='_blank' rel="noreferrer">Diversion Statistics for CS Messaging</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Pre-launch%20email%20.docx?d=w5d4feb4762974ecc9d79a17c1221ca3f&csf=1&web=1&e=5TEUdQ' target='_blank' rel="noreferrer">Pre-Launch Email Template</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Track%20Speeds.xlsx?d=w85df5510f11941ecbcea361829d0da17&csf=1&web=1&e=QMj7Qo' target='_blank' rel="noreferrer">Track Segment Speeds</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:x:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/Lieu%20Requests.xlsx?d=w8b6096fa128143e5825b02268a8a4dc2&csf=1&web=1&e=5ubWjc' target='_blank' rel="noreferrer">Lieu Requests</a></li>
						<li><a href='https://ottawacity.sharepoint.com/:w:/r/sites/TransitOperations/Shared%20Documents/Rail%20Operations/CBTC%20-%20ERC%20Mentoring.docx?d=w1be91cff15b848d4ab9b49fdd262182b&csf=1&web=1&e=a24Lzx' target='_blank' rel="noreferrer">CBTC/ATS Mentoring Checklist</a></li>
						<li>(These are normally found on Teams {'>'} Transit Ops {'>'} ERCs. You can open/edit in browser.)</li>
					</ul>
				</section>

				<section>
					<sub id='resources'></sub>
					<h2>New ERC Resources</h2>
					<ul>
						<li><a href='https://mycentre.ottawa.ca/home#Shell-home' target='_blank' rel="noreferrer">Pay/Leave</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/Scheduling/Forms/Case%20View.aspx?id=%2Fsites%2FRailOperations%2FScheduling%2FTOCC+Staff&viewid=8691d665-c171-4c2c-acb3-f97532cde2b9' target='_blank' rel="noreferrer">Sharepoint Scheduling Folder</a></li>
						<li><a href='https://www.logistikunicorp.com/en/index.asp' target='_blank' rel="noreferrer">Logistik</a></li>
						<li><a href='http://webstaff.transit.local/webstaff/servlet/ServletController.asp?device=stdbrowser&action=doBeginLogin' target='_blank' rel="noreferrer">Telestaff</a></li>
						<li><a href='http://10.136.12.88/CADIncidentManagement/' target='_blank' rel="noreferrer">CAD</a></li>
						<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations' target='_blank' rel="noreferrer">Sharepoint</a></li>
						<li><a href='https://www.chickpeasottawa.com/' target='_blank' rel='noreferrer'>Mission Critical Support</a></li>

						<li id='scadaAlarmsLink'><a href='#resources'
							onClick={() => setScadaPopupActive(true)} >Downloading SCADA Alarms (& secure key code)</a></li>
						<li id='printLink'><a href='#resources'
							onClick={() => setPrintPopupActive(true)} >Print Maintenance Plan</a></li>

						<li className='setUp'>To consider when setting up city PC:
							<ul>
								<li>Printer - Windows + R ={'>'} \\cmfp037\BLFB01F02MFD</li>
								<li>Auto-start apps - Windows + R ={'>'} shell:startup</li>
								<li>Email signature</li>
								<li>Taskbar pins</li>
								<li>Default browser</li>
								<li>Bookmarks</li>
								<li>Set up OneDrive</li>
								<li>Night light</li>
							</ul>
						</li>
						<li className='setUp'>CCTV computer:
							<ul>
								<li>VLC as default media player</li>
								<li>Mouse Without Borders - 976VGFdrmb</li>
								<li>S-VMX Titanium Client: 172.16.xx.96:80</li>
								<li>^ Username: mitron, Password: mitron</li>
								{/*<li>IndigoVision: select Confed 1 areas?</li>*/}
							</ul>
						</li>
					</ul>
						<h3>Shortcuts</h3>
						<ul>
							<li>Windows + L ={'>'} Lock your computer!</li>
							<li>Windows + Shift + S ={'>'} Snip tool shortcut</li>
							<li>Windows + E ={'>'} Windows explorer</li>
							<li>Windows + D ={'>'} Minimize all windows</li>
							<li>Ctrl + L, Alt + Enter ={'>'} duplicate tab (eg to make another CAD)</li>
						</ul>
				</section>

			</article>

			<Sidebar />

			{printPopupActive && <PrintPopup closePopups={closePopups} />}
			{scadaPopupActive && <ScadaPopup closePopups={closePopups} />}
			{siteUpdatesPopupActive && <SiteUpdatesPopup closePopups={closePopups} />}

		</div>
	);
};

export default SharepointPlus;
