import FlagProps from "./FlagProps";

const getFlagProps = (input: FlagProps): FlagProps => {
    let defaultProps: FlagProps = {
        linesHorizontal: false,
        linesVertical: false,
        colorWhite: false,
        colorBlack: false,
        colorRed: false,
        colorGreen: false,
        colorBlue: false,
        colorYellow: false,
        pictureCross: false,
        pictureStar: false,
        pictureCircle: false,
        pictureTriangle: false,
        pictureCrescent: false,
        pictureOther: false,
    };
    return {
        ...defaultProps,
        ...input
    };
};

export const FLAGS = [
    {
        name: 'Afghanistan',
        picture: 'Afghanistan.svg',
        props: getFlagProps({ linesVertical: true, colorBlack: true, colorRed: true, colorGreen: true, pictureOther: true })
    }, {
        name: 'Albania',
        picture: 'Albania.svg',
        props: getFlagProps({ colorRed: true, colorBlack: true, pictureOther: true })
    }, {
        name: 'Algeria',
        picture: 'Algeria.svg',
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorWhite: true, pictureCrescent: true, pictureStar: true })
    }, {
        name: 'Andorra',
        picture: 'Andorra.svg',
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorRed: true, pictureOther: true })
    }, {
        name: 'Angola',
        picture: 'Angola.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlack: true, colorYellow: true, pictureStar: true, pictureOther: true })
    }, {
        name: 'Antigua and Barbuda',
        picture: 'Antigua_and_Barbuda.svg',
        props: getFlagProps({ colorBlack: true, colorYellow: true, colorBlue: true, colorWhite: true, colorRed: true, pictureTriangle: true, pictureOther: true })
    }, {
        name: 'Argentina',
        picture: 'Argentina.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorYellow: true, pictureOther: true})
    }, {
        name: 'Armenia',
        picture: 'Armenia.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorYellow: true })
    }, {
        name: 'Australia',
        picture: 'Australia.svg',
        props: getFlagProps({ colorRed: true, colorWhite: true, colorBlue: true, pictureStar: true, pictureCross: true })
    }, {
        name: 'Austria',
        picture: 'Austria.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true })
    }, {
        name: 'Azerbaijan',
        picture: 'Azerbaijan.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorGreen: true, colorWhite: true, pictureStar: true, pictureCrescent: true })
    }, {
        name: 'Bahrain',
        picture: 'Bahrain.svg',
        props: getFlagProps({ linesVertical: true, colorWhite: true, colorRed: true, pictureOther: true })
    }, {
        name: 'Bangladesh',
        picture: 'Bangladesh.svg',
        props: getFlagProps({ colorGreen: true, colorRed: true, pictureCircle: true })
    }, {
        name: 'Barbados',
        picture: 'Barbados.svg',
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorBlack: true, pictureOther: true })
    }, {
        name: 'Belarus',
        picture: 'Belarus.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorGreen: true, colorWhite: true, pictureOther: true })
    }, {
        name: 'Belgium',
        picture: 'Belgium.svg',
        props: getFlagProps({ linesVertical: true, colorBlack: true, colorYellow: true, colorRed: true })
    }, {
        name: 'Belize',
        picture: 'Belize.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, pictureCircle: true, pictureOther: true })
    }, {
        name: 'Benin',
        picture: 'Benin.svg',
        props: getFlagProps({ linesVertical: true, linesHorizontal: true, colorRed: true, colorYellow: true, colorGreen: true })
    }, {
        name: 'Bhutan',
        picture: 'Bhutan.svg',
        props: getFlagProps({ colorYellow: true, colorRed: true, colorWhite: true, pictureTriangle: true, pictureOther: true })
    }, {
        name: 'Bolivia',
        picture: 'Bolivia.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorYellow: true, colorGreen: true })
    }, {
        name: 'Bosnia and Herzegovina',
        picture: 'Bosnia_and_Herzegovina.svg',
        props: getFlagProps({ colorBlue: true, colorYellow: true, colorWhite: true, pictureTriangle: true, pictureStar: true })
    }, {
        name: 'Botswana',
        picture: 'Botswana.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorBlack: true })
    }, {
        name: 'Brazil',
        picture: 'Brazil.svg',
        props: getFlagProps({ colorGreen: true, colorYellow: true, colorBlue: true, colorWhite: true, pictureCircle: true, pictureOther: true })
    }, {
        name: 'Brunei',
        picture: 'Brunei.svg',
        props: getFlagProps({ colorYellow: true, colorBlack: true, colorWhite: true, colorRed: true, pictureTriangle: true, pictureOther: true })
    }, {
        name: 'Bulgaria',
        picture: 'Bulgaria.svg',
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorGreen: true, colorRed: true })
    }, {
        name: 'Burkina Faso',
        picture: 'Burkina_Faso.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorGreen: true, colorYellow: true, pictureStar: true })
    }, {
        name: 'Burundi',
        picture: 'Burundi.svg',
        props: getFlagProps({ colorGreen: true, colorRed: true, colorWhite: true, pictureTriangle: true, pictureStar: true, pictureCircle: true })
    }, {
        name: 'Cambodia',
        picture: 'Cambodia.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorWhite: true, pictureOther: true })
    }, {
        name: 'Cameroon',
        picture: 'Cameroon.svg',
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorRed: true, colorYellow: true, pictureStar: true })
    }, {
        name: 'Canada',
        picture: 'Canada.svg',
        props: getFlagProps({ linesVertical: true, colorRed: true, colorWhite: true, pictureOther: true })
    }, {
        name: 'Cape Verde',
        picture: 'Cape_Verde.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorRed: true, colorYellow: true, pictureStar: true })
    }, {
        name: 'Chad',
        picture: 'Chad.svg',
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorRed: true })
    }, {
        name: 'Chile',
        picture: 'Chile.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, pictureStar: true })
    }, {
        name: 'Colombia',
        picture: 'Colombia.svg',
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorBlue: true, colorRed: true })
    }, {
        name: 'Costa Rica',
        picture: 'Costa_Rica.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorWhite: true })
    }, {
        name: 'Croatia',
        picture: 'Croatia.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, pictureOther: true })
    }, {
        name: 'Cuba',
        picture: 'Cuba.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorWhite: true, pictureTriangle: true, pictureStar: true })
    }, {
        name: 'Cyprus',
        picture: 'Cyprus.svg',
        props: getFlagProps({ colorWhite: true, colorYellow: true, pictureOther: true })
    }, {
        name: 'Denmark',
        picture: 'Denmark.svg',
        props: getFlagProps({ colorRed: true, colorWhite: true, pictureCross: true })
    }, {
        name: 'Djibouti',
        picture: 'Djibouti.svg',
        props: getFlagProps({ colorWhite: true, colorGreen: true, colorBlue: true, colorRed: true, pictureTriangle: true, pictureStar: true })
    }, {
        name: 'Dominica',
        picture: 'Dominica.svg',
        props: getFlagProps({ colorGreen: true, colorYellow: true, colorBlack: true, colorWhite: true, colorRed: true, pictureCross: true, pictureCircle: true, pictureOther: true })
    }, {
        name: 'East Timor',
        picture: 'East_Timor.svg',
        props: getFlagProps({ colorBlack: true, colorYellow: true, colorRed: true, colorWhite: true, pictureStar: true, pictureTriangle: true })
    }, {
        name: 'Ecuador',
        picture: 'Ecuador.svg',
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorBlue: true, colorRed: true, pictureOther: true })
    }, {
        name: 'Egypt',
        picture: 'Egypt.svg',
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlack: true, colorYellow: true, pictureOther: true })
    }, {
        name: 'El Salvador',
        picture: 'El_Salvador.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, pictureOther: true })
    }, {
        name: 'Equatorial Guinea',
        picture: 'Equatorial_Guinea.svg',
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorRed: true, colorBlue: true, pictureTriangle: true, pictureOther: true })
    }, {
        name: 'Eritrea',
        picture: 'Eritrea.svg',
        props: getFlagProps({ colorGreen: true, colorBlue: true, colorRed: true, colorYellow: true, pictureTriangle: true, pictureOther: true })
    }, {
        name: 'Estonia',
        picture: 'Estonia.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorBlack: true, colorWhite: true })
    }, {
        name: 'Eswatini',
        picture: 'Eswatini.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorYellow: true, colorRed: true, colorBlack: true, colorWhite: true, pictureOther: true })
    }, {
        name: 'Ethiopia',
        picture: 'Ethiopia.svg',
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorYellow: true, colorRed: true, colorBlue: true, pictureCircle: true, pictureStar: true })
    }, {
        name: 'Fiji',
        picture: 'Fiji.svg',
        props: getFlagProps({ colorBlue: true, colorRed: true, colorWhite: true, pictureCross: true, pictureOther: true })
    }, {
        name: 'Finland',
        picture: 'Finland.svg',
        props: getFlagProps({ colorWhite: true, colorBlue: true, pictureCross: true })
    }, {
        name: 'France',
        picture: 'France.svg',
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorWhite: true, colorRed: true })
    }, {
        name: 'The Bahamas',
        picture: 'the_Bahamas.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorYellow: true, colorBlack: true, pictureTriangle: true })
    }, {
        name: 'The Central African Republic',
        picture: 'the_Central_African_Republic.svg',
        props: getFlagProps({ linesHorizontal: true, linesVertical: true, colorBlue: true, colorWhite: true, colorGreen: true, colorYellow: true, colorRed: true, pictureStar: true })
    }, {
        name: 'The Comoros',
        picture: 'the_Comoros.svg',
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorWhite: true, colorRed: true, colorBlue: true, colorGreen: true, pictureTriangle: true, pictureCrescent: true, pictureStar: true })
    }, {
        name: 'The Czech Republic',
        picture: 'the_Czech_Republic.svg',
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorWhite: true, pictureTriangle: true })
    }, {
        name: 'The Democratic Republic of the Congo',
        picture: 'the_Democratic_Republic_of_the_Congo.svg',
        props: getFlagProps({ colorBlue: true, colorYellow: true, colorRed: true, pictureTriangle: true, pictureStar: true })
    }, {
        name: 'The Dominican Republic',
        picture: 'the_Dominican_Republic.svg',
        props: getFlagProps({ colorRed: true, colorBlue: true, colorWhite: true, pictureCross: true, pictureOther: true })
    },{
        name: 'The People\'s Republic of China',
        picture: 'the_Peoples_Republic_of_China.svg',
        props: getFlagProps({ colorRed: true, colorYellow: true, pictureStar: true })
    },{
        name: 'The Republic of the Congo',
        picture: 'the_Republic_of_the_Congo.svg',
        props: getFlagProps({ colorRed: true, colorYellow: true, colorGreen: true, pictureTriangle: true })
    }, {
        name: "Artsakh",
        picture: "Artsakh.svg",
        props: getFlagProps({  })
    },{
        name: "Côte d'Ivoire",
        picture: "Cote_dIvoire.svg",
        props: getFlagProps({  })
    },{
        name: "Gabon",
        picture: "Gabon.svg",
        props: getFlagProps({  })
    },{
        name: "Georgia",
        picture: "Georgia.svg",
        props: getFlagProps({  })
    },{
        name: "Germany",
        picture: "Germany.svg",
        props: getFlagProps({  })
    },{
        name: "Ghana",
        picture: "Ghana.svg",
        props: getFlagProps({  })
    },{
        name: "Greece",
        picture: "Greece.svg",
        props: getFlagProps({  })
    },{
        name: "Grenada",
        picture: "Grenada.svg",
        props: getFlagProps({  })
    },{
        name: "Guatemala",
        picture: "Guatemala.svg",
        props: getFlagProps({  })
    },{
        name: "Guinea-Bissau",
        picture: "Guinea-Bissau.svg",
        props: getFlagProps({  })
    },{
        name: "Guinea",
        picture: "Guinea.svg",
        props: getFlagProps({  })
    },{
        name: "Guyana",
        picture: "Guyana.svg",
        props: getFlagProps({  })
    },{
        name: "Haiti",
        picture: "Haiti.svg",
        props: getFlagProps({  })
    },{
        name: "Honduras",
        picture: "Honduras.svg",
        props: getFlagProps({  })
    },{
        name: "Hungary",
        picture: "Hungary.svg",
        props: getFlagProps({  })
    },{
        name: "Iceland",
        picture: "Iceland.svg",
        props: getFlagProps({  })
    },{
        name: "India",
        picture: "India.svg",
        props: getFlagProps({  })
    },{
        name: "Indonesia",
        picture: "Indonesia.svg",
        props: getFlagProps({  })
    },{
        name: "Iran",
        picture: "Iran.svg",
        props: getFlagProps({  })
    },{
        name: "Iraq",
        picture: "Iraq.svg",
        props: getFlagProps({  })
    },{
        name: "Ireland",
        picture: "Ireland.svg",
        props: getFlagProps({  })
    },{
        name: "Israel",
        picture: "Israel.svg",
        props: getFlagProps({  })
    },{
        name: "Italy",
        picture: "Italy.svg",
        props: getFlagProps({  })
    },{
        name: "Jamaica",
        picture: "Jamaica.svg",
        props: getFlagProps({  })
    },{
        name: "Japan",
        picture: "Japan.svg",
        props: getFlagProps({  })
    },{
        name: "Jordan",
        picture: "Jordan.svg",
        props: getFlagProps({  })
    },{
        name: "Kazakhstan",
        picture: "Kazakhstan.svg",
        props: getFlagProps({  })
    },{
        name: "Kenya",
        picture: "Kenya.svg",
        props: getFlagProps({  })
    },{
        name: "Kiribati",
        picture: "Kiribati.svg",
        props: getFlagProps({  })
    },{
        name: "Kosovo",
        picture: "Kosovo.svg",
        props: getFlagProps({  })
    },{
        name: "Kuwait",
        picture: "Kuwait.svg",
        props: getFlagProps({  })
    },{
        name: "Kyrgyzstan",
        picture: "Kyrgyzstan.svg",
        props: getFlagProps({  })
    },{
        name: "Laos",
        picture: "Laos.svg",
        props: getFlagProps({  })
    },{
        name: "Latvia",
        picture: "Latvia.svg",
        props: getFlagProps({  })
    },{
        name: "Lebanon",
        picture: "Lebanon.svg",
        props: getFlagProps({  })
    },{
        name: "Lesotho",
        picture: "Lesotho.svg",
        props: getFlagProps({  })
    },{
        name: "Liberia",
        picture: "Liberia.svg",
        props: getFlagProps({  })
    },{
        name: "Libya",
        picture: "Libya.svg",
        props: getFlagProps({  })
    },{
        name: "Liechtenstein",
        picture: "Liechtenstein.svg",
        props: getFlagProps({  })
    },{
        name: "Lithuania",
        picture: "Lithuania.svg",
        props: getFlagProps({  })
    },{
        name: "Luxembourg",
        picture: "Luxembourg.svg",
        props: getFlagProps({  })
    },{
        name: "Madagascar",
        picture: "Madagascar.svg",
        props: getFlagProps({  })
    },{
        name: "Malawi",
        picture: "Malawi.svg",
        props: getFlagProps({  })
    },{
        name: "Malaysia",
        picture: "Malaysia.svg",
        props: getFlagProps({  })
    },{
        name: "Maldives",
        picture: "Maldives.svg",
        props: getFlagProps({  })
    },{
        name: "Mali",
        picture: "Mali.svg",
        props: getFlagProps({  })
    },{
        name: "Malta",
        picture: "Malta.svg",
        props: getFlagProps({  })
    },{
        name: "Mauritania",
        picture: "Mauritania.svg",
        props: getFlagProps({  })
    },{
        name: "Mauritius",
        picture: "Mauritius.svg",
        props: getFlagProps({  })
    },{
        name: "Mexico",
        picture: "Mexico.svg",
        props: getFlagProps({  })
    },{
        name: "Moldova",
        picture: "Moldova.svg",
        props: getFlagProps({  })
    },{
        name: "Monaco",
        picture: "Monaco.svg",
        props: getFlagProps({  })
    },{
        name: "Mongolia",
        picture: "Mongolia.svg",
        props: getFlagProps({  })
    },{
        name: "Montenegro",
        picture: "Montenegro.svg",
        props: getFlagProps({  })
    },{
        name: "Morocco",
        picture: "Morocco.svg",
        props: getFlagProps({  })
    },{
        name: "Mozambique",
        picture: "Mozambique.svg",
        props: getFlagProps({  })
    },{
        name: "Myanmar",
        picture: "Myanmar.svg",
        props: getFlagProps({  })
    },{
        name: "Namibia",
        picture: "Namibia.svg",
        props: getFlagProps({  })
    },{
        name: "Nauru",
        picture: "Nauru.svg",
        props: getFlagProps({  })
    },{
        name: "Nepal",
        picture: "Nepal.svg",
        props: getFlagProps({  })
    },{
        name: "New Zealand",
        picture: "New_Zealand.svg",
        props: getFlagProps({  })
    },{
        name: "Nicaragua",
        picture: "Nicaragua.svg",
        props: getFlagProps({  })
    },{
        name: "Nigeria",
        picture: "Nigeria.svg",
        props: getFlagProps({  })
    },{
        name: "Niger",
        picture: "Niger.svg",
        props: getFlagProps({  })
    },{
        name: "Niue",
        picture: "Niue.svg",
        props: getFlagProps({  })
    },{
        name: "North Korea",
        picture: "North_Korea.svg",
        props: getFlagProps({  })
    },{
        name: "North Macedonia",
        picture: "North_Macedonia.svg",
        props: getFlagProps({  })
    },{
        name: "Norway",
        picture: "Norway.svg",
        props: getFlagProps({  })
    },{
        name: "Oman",
        picture: "Oman.svg",
        props: getFlagProps({  })
    },{
        name: "Pakistan",
        picture: "Pakistan.svg",
        props: getFlagProps({  })
    },{
        name: "Palau",
        picture: "Palau.svg",
        props: getFlagProps({  })
    },{
        name: "Palestine",
        picture: "Palestine.svg",
        props: getFlagProps({  })
    },{
        name: "Panama",
        picture: "Panama.svg",
        props: getFlagProps({  })
    },{
        name: "Papua New Guinea",
        picture: "Papua_New_Guinea.svg",
        props: getFlagProps({  })
    },{
        name: "Paraguay",
        picture: "Paraguay.svg",
        props: getFlagProps({  })
    },{
        name: "Peru",
        picture: "Peru.svg",
        props: getFlagProps({  })
    },{
        name: "Poland",
        picture: "Poland.svg",
        props: getFlagProps({  })
    },{
        name: "Portugal",
        picture: "Portugal.svg",
        props: getFlagProps({  })
    },{
        name: "Qatar",
        picture: "Qatar.svg",
        props: getFlagProps({  })
    },{
        name: "Romania",
        picture: "Romania.svg",
        props: getFlagProps({  })
    },{
        name: "Russia",
        picture: "Russia.svg",
        props: getFlagProps({  })
    },{
        name: "Rwanda",
        picture: "Rwanda.svg",
        props: getFlagProps({  })
    },{
        name: "Saint Kitts and Nevis",
        picture: "Saint_Kitts_and_Nevis.svg",
        props: getFlagProps({  })
    },{
        name: "Saint Lucia",
        picture: "Saint_Lucia.svg",
        props: getFlagProps({  })
    },{
        name: "Saint Vincent and the Grenadines",
        picture: "Saint_Vincent_and_the_Grenadines.svg",
        props: getFlagProps({  })
    },{
        name: "Samoa",
        picture: "Samoa.svg",
        props: getFlagProps({  })
    },{
        name: "San Marino",
        picture: "San_Marino.svg",
        props: getFlagProps({  })
    },{
        name: "Sao Tome and Principe",
        picture: "Sao_Tome_and_Principe.svg",
        props: getFlagProps({  })
    },{
        name: "Saudi Arabia",
        picture: "Saudi_Arabia.svg",
        props: getFlagProps({  })
    },{
        name: "Senegal",
        picture: "Senegal.svg",
        props: getFlagProps({  })
    },{
        name: "Serbia",
        picture: "Serbia.svg",
        props: getFlagProps({  })
    },{
        name: "Seychelles",
        picture: "Seychelles.svg",
        props: getFlagProps({  })
    },{
        name: "Sierra Leone",
        picture: "Sierra_Leone.svg",
        props: getFlagProps({  })
    },{
        name: "Singapore",
        picture: "Singapore.svg",
        props: getFlagProps({  })
    },{
        name: "Slovakia",
        picture: "Slovakia.svg",
        props: getFlagProps({  })
    },{
        name: "Slovenia",
        picture: "Slovenia.svg",
        props: getFlagProps({  })
    },{
        name: "Somalia",
        picture: "Somalia.svg",
        props: getFlagProps({  })
    },{
        name: "Somaliland",
        picture: "Somaliland.svg",
        props: getFlagProps({  })
    },{
        name: "South Africa",
        picture: "South_Africa.svg",
        props: getFlagProps({  })
    },{
        name: "South Korea",
        picture: "South_Korea.svg",
        props: getFlagProps({  })
    },{
        name: "South Ossetia",
        picture: "South_Ossetia.svg",
        props: getFlagProps({  })
    },{
        name: "South Sudan",
        picture: "South_Sudan.svg",
        props: getFlagProps({  })
    },{
        name: "Spain",
        picture: "Spain.svg",
        props: getFlagProps({  })
    },{
        name: "Sri Lanka",
        picture: "Sri_Lanka.svg",
        props: getFlagProps({  })
    },{
        name: "Sudan",
        picture: "Sudan.svg",
        props: getFlagProps({  })
    },{
        name: "Suriname",
        picture: "Suriname.svg",
        props: getFlagProps({  })
    },{
        name: "Sweden",
        picture: "Sweden.svg",
        props: getFlagProps({  })
    },{
        name: "Switzerland",
        picture: "Switzerland.svg",
        props: getFlagProps({  })
    },{
        name: "Syria",
        picture: "Syria.svg",
        props: getFlagProps({  })
    },{
        name: "Tajikistan",
        picture: "Tajikistan.svg",
        props: getFlagProps({  })
    },{
        name: "Tanzania",
        picture: "Tanzania.svg",
        props: getFlagProps({  })
    },{
        name: "Thailand",
        picture: "Thailand.svg",
        props: getFlagProps({  })
    },{
        name: "The Cook Islands",
        picture: "the_Cook_Islands.svg",
        props: getFlagProps({  })
    },{
        name: "The Federated States of Micronesia",
        picture: "the_Federated_States_of_Micronesia.svg",
        props: getFlagProps({  })
    },{
        name: "The Gambia",
        picture: "The_Gambia.svg",
        props: getFlagProps({  })
    },{
        name: "The Marshall Islands",
        picture: "the_Marshall_Islands.svg",
        props: getFlagProps({  })
    },{
        name: "The Netherlands",
        picture: "the_Netherlands.svg",
        props: getFlagProps({  })
    },{
        name: "The Philippines",
        picture: "the_Philippines.svg",
        props: getFlagProps({  })
    },{
        name: "The Republic of Abkhazia",
        picture: "the_Republic_of_Abkhazia.svg",
        props: getFlagProps({  })
    },{
        name: "The Republic of China",
        picture: "the_Republic_of_China.svg",
        props: getFlagProps({  })
    },{
        name: "The Sahrawi Arab Democratic Republic",
        picture: "the_Sahrawi_Arab_Democratic_Republic.svg",
        props: getFlagProps({  })
    },{
        name: "The Solomon Islands",
        picture: "the_Solomon_Islands.svg",
        props: getFlagProps({  })
    },{
        name: "The Turkish Republic of Northern Cyprus",
        picture: "the_Turkish_Republic_of_Northern_Cyprus.svg",
        props: getFlagProps({  })
    },{
        name: "The United Arab Emirates",
        picture: "the_United_Arab_Emirates.svg",
        props: getFlagProps({  })
    },{
        name: "The United Kingdom",
        picture: "the_United_Kingdom.svg",
        props: getFlagProps({  })
    },{
        name: "The United States",
        picture: "the_United_States.svg",
        props: getFlagProps({  })
    },{
        name: "The Vatican City",
        picture: "the_Vatican_City.svg",
        props: getFlagProps({  })
    },{
        name: "Togo",
        picture: "Togo.svg",
        props: getFlagProps({  })
    },{
        name: "Tonga",
        picture: "Tonga.svg",
        props: getFlagProps({  })
    },{
        name: "Transnistria (state)",
        picture: "Transnistria_(state).svg",
        props: getFlagProps({  })
    },{
        name: "Trinidad and Tobago",
        picture: "Trinidad_and_Tobago.svg",
        props: getFlagProps({  })
    },{
        name: "Tunisia",
        picture: "Tunisia.svg",
        props: getFlagProps({  })
    },{
        name: "Turkey",
        picture: "Turkey.svg",
        props: getFlagProps({  })
    },{
        name: "Turkmenistan",
        picture: "Turkmenistan.svg",
        props: getFlagProps({  })
    },{
        name: "Tuvalu",
        picture: "Tuvalu.svg",
        props: getFlagProps({  })
    },{
        name: "Uganda",
        picture: "Uganda.svg",
        props: getFlagProps({  })
    },{
        name: "Ukraine",
        picture: "Ukraine.svg",
        props: getFlagProps({  })
    },{
        name: "Uruguay",
        picture: "Uruguay.svg",
        props: getFlagProps({  })
    },{
        name: "Uzbekistan",
        picture: "Uzbekistan.svg",
        props: getFlagProps({  })
    },{
        name: "Vanuatu",
        picture: "Vanuatu.svg",
        props: getFlagProps({  })
    },{
        name: "Venezuela",
        picture: "Venezuela.svg",
        props: getFlagProps({  })
    },{
        name: "Vietnam",
        picture: "Vietnam.svg",
        props: getFlagProps({  })
    },{
        name: "Yemen",
        picture: "Yemen.svg",
        props: getFlagProps({  })
    },{
        name: "Zambia",
        picture: "Zambia.svg",
        props: getFlagProps({  })
    },{
        name: "Zimbabwe",
        picture: "Zimbabwe.svg",
        props: getFlagProps({  })
    }
];
