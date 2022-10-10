/* clinical Biochemistry*/
const BioDevicesData = require("./Biochemistry/Devicedata");
const BioUnits = require("./Biochemistry/UnitsData");
const BioActivity = require("./Biochemistry/ActivitiesData");
const BiochemistrystaffMember = require("./Biochemistry/BiochemistrystaffMember");
/* clinical Microbiology and immunology*/
const ClinicaMicrobiologyDevicesData = require("./Clinical microbiology and immunology/DevicesData");
const servicesClinical = require("./Clinical microbiology and immunology/ServicesObj");
const ClinicalMicroStaff = require("./Clinical microbiology and immunology/StaffClinicalObj");
/*pathology*/
const AbouPathologyData = require("./Pathology/AbouPathologyData");
const ServicesObjPathology = require("./Pathology/ServiceObjPathology");
const StaffPathology = require("./Pathology/StaffPathology");
module.exports = [
  {
    index: 0, //Activity,About
    id: 2,
    name: "ClinicalBiochemistry",
    Devices: BioDevicesData,
    units: BioUnits,
    target:
      "Providing the leading medical analysis services in diagnosing diseases of genetic metabolic defects in children, in addition to liver and GIT diseases. Which increases the accuracy of medical diagnosis and treatment of patients. The department recently works to the include of lab tests related to the measurement of bile acids in plasma, measuring heavy metals in blood, chromosomal analysis and tissue culture.",
    activity: BioActivity,
    staffMembers: BiochemistrystaffMember,
    passedHeight: 800,
    url: "",
    url: "/ClinicalBiochemistry",
  },
  {
    //  index:1,
    id: 1,
    name: "clinicalmicrobiologyandimmunology",
    Devices: ClinicaMicrobiologyDevicesData,
    services: servicesClinical,
    backgrounImageService: "/assets/Pathology/pathologylab/pathologylab6.jpeg",
    url: "/clinicalmicrobiologyandimmunology",
    staffMembers: ClinicalMicroStaff,
    passedHeight: 800,
  },

  {
    id: 3,
    name: "pathology",
    url: "/pathology",
    about: AbouPathologyData,
    services: ServicesObjPathology,
    backgrounImageService: "/assets/Pathology/pathologylab/pathologylab6.jpeg",
    staffMembers: StaffPathology,
    passedHeight: 800,
  },
];
