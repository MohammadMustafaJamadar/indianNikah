const selectGenderList = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const forMaritalStatus = [
  { value: "Unmarried", label: "Unmarried" },
  { value: "Divorced", label: "Divorced" },
  { value: "Awaiting Divorce", label: "Awaiting Divorce" },
  { value: "Khula", label: "Khula" },
  { value: "2nd marriage", label: "2nd marriage" },
  { value: "Widow (Female)", label: "Widow (Female)" },
  { value: "Widower (Male)", label: "Widower (Male)" },
];

const ageGroupSelectList = [
  { value: "18-21 Years", label: "18-21 Years" },
  { value: "22-25 Years", label: "22-25 Years" },
  { value: "26-29 Years", label: "26-29 Years" },
  { value: "30-33 Years", label: "30-33 Years" },
  { value: "34-40 Years", label: "34-40 Years" },
  { value: "40+ Years", label: "40+ Years" },
  { value: "30+  Unmarried", label: "30+  Unmarried" },
];
const forGraduate = [
  { value: "Aalim / Aalima", label: "Aalim / Aalima" },
  { value: "Below 10th", label: "Below 10th" },
  { value: "Doctor", label: "Doctor" },
  { value: "Diploma", label: "Diploma" },
  { value: "Engineer", label: "Engineer" },
  { value: "Graduate", label: "Graduate" },
  { value: "Hafiz / Hafiza", label: "Hafiz / Hafiza" },
  { value: "Mufti", label: "Mufti" },
  { value: "Post Graduate", label: "Post Graduate" },
  { value: "Ph.D", label: "Ph.D" },
  { value: "10th Pass", label: "10th Pass" },
  { value: "12th Pass", label: "12th Pass" },
];

const forPhysicalStatus = [
  { value: "Normal", label: "Normal" },
  { value: "Handicap", label: "Handicap" },
];

const maslakSlectBar = [
  { value: "Ahle Hadis (Salafi)", label: "Ahle Hadis (Salafi)" },
  { value: "Barelvi (Dargah/Niyaz)", label: "Barelvi (Dargah/Niyaz)" },
  { value: "Bohra", label: "Bohra" },
  { value: "Deobandi (Tablighi)", label: "Deobandi (Tablighi)" },
  { value: "Jamat Islami", label: "Jamat Islami" },
  { value: "No Maslak (Sunni)", label: "No Maslak (Sunni)" },
  { value: "Reverted(New) Muslim", label: "Reverted(New) Muslim" },
  { value: "Shafai", label: "Shafai" },
  { value: "Shia", label: "Shia" },
];

const biradariSlectBar = [
  { value: "Momin", label: "Momin" },
  { value: "Ansari", label: "Ansari" },
  { value: "Attar", label: "Attar" },
  { value: "Bade Qureshi (Qasab)", label: "Bade Qureshi (Qasab)" },
  { value: "Bagwan", label: "Bagwan" },
  { value: "Baid/Lodhi", label: "Baid/Lodhi" },
  { value: "Chote Qureshi (Qasab)", label: "Chote Qureshi (Qasab)" },
  { value: "Cutchi Memon", label: "Cutchi Memon" },
  { value: "Khan/Pathan", label: "Khan/Pathan" },
  { value: "Konkani", label: "Konkani" },
  { value: "Memon", label: "Memon" },
  { value: "Mulani", label: "Mulani" },
  { value: "Nadaf", label: "Nadaf" },
  { value: "No Biradari", label: "No Biradari" },
  { value: "Pinjari", label: "Pinjari" },
  { value: "Qureshi", label: "Qureshi" },
  { value: "Rangrez", label: "Rangrez" },
  { value: "Rayeen", label: "Rayeen" },
  { value: "Sayyed", label: "Sayyed" },
  { value: "Shaikh", label: "Shaikh" },
  { value: "Tamboli", label: "Tamboli" },
  { value: "Maniyar", label: "Maniyar" },
];

const states = [
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
  { value: "Daman and Diu ", label: "Daman and Diu " },
  { value: "Delhi", label: "Delhi" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "West Bengal", label: "West Bengal" },
];

const countries = [
  { value: "India" },
  { value: "Saudi Arabia" },
  { value: "Qatar" },
  { value: "Kuwait" },
  { value: "Bahrain" },
  { value: "USA" },
  { value: "Canada" },
  { value: "UK" },
  { value: "Oman" },
  { value: "Italy" },
  { value: "UAE" },
  { value: "Germany" },
  { value: "France" },
  { value: "South Africa" },
  { value: "Singapore" },
  { value: "Australia" },
  { value: "Malaysia" },
  { value: "Malawi" },
  { value: "Spain" },
  { value: "Algeria" },
  { value: "Ethiopia" },
  { value: "Tanzania" },
];

export {
  states,
  biradariSlectBar,
  maslakSlectBar,
  forGraduate,
  forMaritalStatus,
  forPhysicalStatus,
  selectGenderList,
  ageGroupSelectList,
  countries,
};
