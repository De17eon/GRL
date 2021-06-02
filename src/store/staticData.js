export const seismicOptions = [
  { value: {type: "LOAD_DATA_BY_SEISMIC", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_SEISMIC", option: "SeismicallyActiveFault"}, label: "Сейсмоактивные" },
]
export const kinematicLevelOptions = [
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "NormalSlCB"}, label: "Сбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftNormalCB"}, label: "Сдвиго-сбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "UpLiftCB"}, label: "Взбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftUpCB"}, label: "Сдвиго-взбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftSCB"}, label: "Левые сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftNSCB"}, label: "Левые сбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightNSCB"}, label: "Правые сбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightUSCB"}, label: "Правые взбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightSCB"}, label: "Правые сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftUSCB"}, label: "Левые взбросо-сдвиги" },
]
export const historicalAgeOptions = [
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HistoricalFaultsID"}, label: "Исторический" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HoloceneFaultsID"}, label: "Голоценовый" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PleistoceneFaultsID"}, label: "Плейстоценовый" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PlioceneFaultsID"}, label: "Плиоценовый" },
]