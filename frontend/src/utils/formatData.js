import PropTypes from "prop-types";

/** 
 * @param {object} nutritive
 * @returns {object}
 */

export const formatedNutritive = (nutritive) => {
  const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = nutritive.keyData;
  if(nutritive.keyData.hasOwnProperty('calorieCount')){
    const formatObj = {
      calorie: calorieCount + 'kcal',
      labelCalories: "Calories",
      glucides: carbohydrateCount + 'g',
      labelGlucides: "Glucides", 
      lipides: lipidCount + 'g', 
      labelLipides: 'Lipides',
      proteines: proteinCount + 'g',
      labelProteines: 'Proteines'
    };
    nutritive.keyData = formatObj;
    return nutritive;
  }
  return nutritive
}


/** 
 * @param {object} performances 
 * @returns {object}
 */
export const formatedPerf = (performances) => {
  let essentialDatas = performances?.data;
      essentialDatas?.map((data) => {
        // For each data, if kind key egal to an number, give a name match to specify sector
        switch (data.kind) {
          // If kind is egal to 1, give name 'Cardio' at this type
          case 1:
            return data.kind = 'Cardio';
          // If kind is egal to 2, give name 'Énergie' at this type
          case 2:
            return data.kind = 'Énergie';
          // If kind is egal to 3, give name 'Endurance' at this type
          case 3:
            return data.kind = 'Endurance';
          case 4:
          // If kind is egal to 4, give name 'Force' at this type
            return data.kind = 'Force';
          // If kind is egal to 5, give name 'Vitesse' at this type
          case 5:
            return data.kind = 'Vitesse';
          // If kind is egal to 6, give name 'Intensité' at this type
          case 6:
            return data.kind = 'Intensité';
          default :
            return data;
        }
      })
      return essentialDatas
}

/** 
 * @param {array} dayDate 
 * @returns {array}
 */

export const formatedDate = (dayDate) => {
  dayDate?.map((dataItem) => {
    switch(dataItem.day) {
      case 1:
        return dataItem.day = 'L';
      case 2:
        return dataItem.day = 'M';
      case 3:
        return dataItem.day = 'M';
      case 4:
        return dataItem.day = 'J';
      case 5:
        return dataItem.day = 'V';
      case 6:
        return dataItem.day = 'S';
      case 7:
        return dataItem.day = 'D';
      default:
        return dayDate?.data?.sessions
    }
  })
  return dayDate
}

formatedNutritive.PropTypes = {
  nutritive: PropTypes.object
}

formatedPerf.PropTypes = {
  performances: PropTypes.object
}

formatedDate.PropTypes = {
  dayDate: PropTypes.array
}