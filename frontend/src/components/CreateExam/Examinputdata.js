const ExamInputData = [
  {
    type: "select",
    name: "Select Category",
    label: "Select Category",
    id: "Select Category",
    SelectProps:"{{native: false,}}",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
    options: [
      {
        value: "Online",
        label: "Online",
      },
      {
        value: "Ofline",
        label: "Ofline",
      },
    ],
  },
  {
    type: "select",
    name: "Select Sub Category",
    label: "Select Sub Category",
    id: "Select_Sub_Category",
    SelectProps:"{{native: false,}}",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
    options: [
      {
        value: "Online",
        label: "Online",
      },
      {
        value: "Ofline",
        label: "Ofline",
      },
    ],
  },
  {
    type: "text",
    name: "Exam Name",
    label: "Exam Name",
    id: "Exam_Name",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
  },
  {
    type: "text",
    name: "Exam Overview",
    label: "Exam Overview",
    id: "Exam_Overview",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
  },
  {
    type: "number",
    name: "Number of Exam Stage",
    label: "Number of Exam Stage",
    id: "Number_of_Exam_Stage",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
  },
  {
    type: "select",
    name: "Exam Mode",
    label: "Select Exam Mode",
    id: "Exam_Mode",
    SelectProps:"{{native: false,}}",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
    options: [
      {
        value: "Online",
        label: "Online",
      },
      {
        value: "Ofline",
        label: "Ofline",
      },
    ],
  },
  {
    type: "text",
    name: "Exam Duration",
    label: "Exam Duration",
    id: "Exam_Duration",
    value: "",
    hasError: false,
    disabled: false,
    isRequired: false,
  },  
];
export default ExamInputData;
