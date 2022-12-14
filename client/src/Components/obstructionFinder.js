import React from 'react';

import FinderControl from './finderControl.js';
import AreaSelector from './areaSelector.js';
import PlanDetails from './planDetails.js';



const ObstructionFinder = ({ diversionState, setDiversionState, openBoxes, setOpenBoxes, socket }) => {

	


  // useEffect(() => {
  //   window.localStorage.setItem('numTrains', numTrains);
  // }, [numTrains]);

  // useEffect(() => {
  //   setNumTrains(JSON.parse(window.localStorage.getItem('numTrains')));
  // }, []);

  // setNumTrains(findScheduledTrains());

	return (
		<div id='obstruction-plan-finder'>

{/* finder control component */}
			<FinderControl
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				openBoxes={openBoxes}
				setOpenBoxes={setOpenBoxes}
        socket={socket} />

{/* finding area component */}
			{openBoxes.areas && <AreaSelector
				diversionState={diversionState}
				setDiversionState={setDiversionState} />}

{/* details component */}
			{openBoxes.tables && <PlanDetails
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				openBoxes={openBoxes}
				setOpenBoxes={setOpenBoxes} />}

		</div>
	);
};

/*
Duplicate - 2.7/3.4 - but different # of trains for east loop
When 'if 13, park trains' - what if 15?
Plans for lost crossovers?
3.2 should be only to HUR west crossover
Many more scenarios not covered by current plans and diagrams
Diagrams not always totally accurate/specific (1.1 vs 1.3)
Graphic for 2.4 shows trains looping TUN-PAR but the plan says 2 shuttles offset TUN-LYO
*/

/*
also include Thales commands, special instructions, basically all the info they need to implement the diversion. Perhaps integrate PA/PIDS (if it's possible to do without making it messy, or do a separate one for that purpose).
*/

export default ObstructionFinder;
