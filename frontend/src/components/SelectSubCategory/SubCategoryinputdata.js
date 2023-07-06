const SubCategoryInputData = [
  {
    type: 'select',
    name: 'Select Category',
    label: 'Select Category',
    id: 'Select_Category',
    value: '',
    hasError: false,
    disabled: false,
    isRequired: false,
    SelectProps:"{{native: false,}}",
    options:[{
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
    ]
},
{
  type: 'text',
  name: 'Sub Category',
  label: 'Sub Category',
  id: 'Sub_Category',
  value: '',
  hasError: false,
  disabled: false,
  isRequired: false,
},
  {
    type: 'file',
    name: 'Sub Category Logo',
    label: 'Sub Category Logo',
    id: 'Sub_Category_Logo',
    value: '',
    hasError: false,
    disabled: false,
    isRequired: false,
    
},
];
export default SubCategoryInputData;
