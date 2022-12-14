import React, { useEffect } from 'react';
import { useState } from 'react';
import choosePlan from '../Utils/choosePlan.js';

const areaArray = ['area-one-one', 'area-two-one', 'area-three-one', 'area-four-one', 'area-five-one', 'area-six-one', 'area-seven-one', 'area-eight-one', 'area-nine-one', 'area-ten-one', 'area-eleven-one', 'area-twelve-one', 'area-thirteen-one', 'area-fourteen-one', 'area-one-two', 'area-two-two', 'area-three-two', 'area-four-two', 'area-five-two', 'area-six-two', 'area-seven-two', 'area-eight-two', 'area-nine-two', 'area-ten-two', 'area-eleven-two', 'area-twelve-two', 'area-thirteen-two', 'area-fourteen-two'];

const AreaSelector = ({ diversionState, setDiversionState }) => {

	const [checkedAreas, setCheckedAreas] = useState(new Array(areaArray.length).fill(false));

	useEffect(() => {
		setDiversionState(() => {
			let obj = Object.assign({}, diversionState);
			obj.planNumber = choosePlan(diversionState, checkedAreas);
			return obj;
		})
	}, [checkedAreas]);


	function handleAreaChange(position) {
		setCheckedAreas(() => checkedAreas.map((item, index) => index === position ? !item : item));
	};

	function enterPlanManually() {
		clearAll();
		window.setTimeout(() => {
			setDiversionState(() => {
				let obj = Object.assign({}, diversionState);
				obj.planNumber = window.prompt('Enter plan number:');
				return obj;
			})
		}, 300)
	}

	function handleTunnelOne() {
		setCheckedAreas(() => {
			let arr = checkedAreas.map((item, index) => {
				if((index > 0 && index < 5) || (index > 14 && index < 19)) {
					return true;
				} else {
					return false;
				}
			})
			return arr;
		})
	};
	function handleTunnelTwo() {
		setCheckedAreas(() => {
			let arr = checkedAreas.map((item, index) => {
				if((index > 0 && index < 6) || (index > 14 && index < 20)) {
					return true;
				} else {
					return false;
				}
			})
			return arr;
		})
	};
	

  function clearAll() {
    setCheckedAreas(() =>{
	const arr = new Array(areaArray.length).fill(false);
	return arr;
    });
  }


 function createAreasOne() {
	return areaArray.map((areaName, index) => {
		if(index < areaArray.length / 2) {
			return (
				<div className='area-container' key={areaName}>
					<input onChange={() => handleAreaChange(index)} checked={checkedAreas[index]} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
					<label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>&nbsp;
				</div>
			)
		}
	});
};
function createAreasTwo() {
	return areaArray.map((areaName, index) => {
		if(index >= areaArray.length / 2) {
			return (
				<div className='area-container' key={areaName}>
					<input name={areaName} value={areaName} onChange={() => handleAreaChange(index)} checked={checkedAreas[index]} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
					<label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>&nbsp;
				</div>
			)
		}
	});
};


/*
  ///////////////////////////////////////////////////////////////////////////////////
  good explanation for checkboxes
  http://react.tips/checkboxes-in-react-16/

  another tut
  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
*/

    return (
		<div id='area-selector'>
			<p id='area-instruction'>Click all obstructed areas (click again to de-select)</p>
			<div id='track-one-areas'>
				{createAreasOne()}
			</div>
			<div className='labels'>
				<p>TUN-W</p>&nbsp;
				<p>BAY-W</p>&nbsp;
				<p>PIM-W</p>&nbsp;
				<p>LYO-W</p>&nbsp;
				<p>PAR-W</p>&nbsp;
				<p>RID-W</p>&nbsp;
				<p>UOT-W</p>&nbsp;
				<p>LEE-W</p>&nbsp;
				<p>HUR-W</p>&nbsp;
				<p>TRE-W</p>&nbsp;
				<p className='label-extra-one'>STL-W</p>&nbsp;
				<p>CYR-W</p>&nbsp;
				<p className='label-extra-two'>BLA-W</p>
			</div>
			<div>
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station cplat1'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station stl'></div>&nbsp;
				<div className='t1s station cplat1'></div>&nbsp;
				<div className='t1s station cplat1 bla'></div>
			</div>

			<div id='track1'></div>
			<div id='xovers'>
				<div className='xover' id='tunx'><p>X</p></div>
				<div className='xover' id='lyox'><p>X</p></div>
				<div className='xover' id='uotx'><p>X</p></div>
				<div className='xover' id='hurx'><p>/ \</p></div>
				<div className='xover' id='trex'><p>/ \</p></div>
				<div className='xover' id='stlx'><p>/ \</p></div>
				<div className='xover' id='blax'><p>\ /</p></div>
			</div>
			<div id='track2'></div>

			<div>
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station cplat2'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station stl'></div>&nbsp;
				<div className='t2s station cplat2'></div>&nbsp;
				<div className='t2s station cplat2 bla'></div>
			</div>
			<div className='labels'>
				<p>TUN-E</p>&nbsp;
				<p>BAY-E</p>&nbsp;
				<p>PIM-E</p>&nbsp;
				<p>LYO-E</p>&nbsp;
				<p>PAR-E</p>&nbsp;
				<p>RID-E</p>&nbsp;
				<p>UOT-E</p>&nbsp;
				<p>LEE-E</p>&nbsp;
				<p>HUR-E</p>&nbsp;
				<p>TRE-E</p>&nbsp;
				<p className='label-extra-one'>STL-E</p>&nbsp;
				<p>CYR-E</p>&nbsp;
				<p className='label-extra-two'>BLA-E</p>
			</div>
			<div id='track-two-areas'>
				{createAreasTwo()}
			</div>
			<div id='bottom-buttons'>
				<button id='enter-plan-manually' onClick={enterPlanManually}>Enter Plan Manually</button>
				<button id='tunnel-one' onClick={handleTunnelOne}>Downtown Tunnel Closed</button>
				<button id='tunnel-two'onClick={handleTunnelTwo}>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
				<button id='clear-all-areas' onClick={clearAll}>Clear all</button>
			</div>
		</div>
	)
};

export default AreaSelector;
