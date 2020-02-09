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
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorYellow: true, colorWhite: true, pictureOther: true })
    },{
        name: "Côte d'Ivoire",
        picture: "Cote_dIvoire.svg",
        props: getFlagProps({ linesVertical: true, colorYellow: true, colorWhite: true, colorGreen: true,  })
    },{
        name: "Gabon",
        picture: "Gabon.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorYellow: true, colorBlue: true })
    },{
        name: "Georgia",
        picture: "Georgia.svg",
        props: getFlagProps({ colorWhite: true, colorRed: true, pictureCross: true })
    },{
        name: "Germany",
        picture: "Germany.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorRed: true, colorYellow: true })
    },{
        name: "Ghana",
        picture: "Ghana.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorYellow: true, colorGreen: true, colorBlack: true, pictureStar: true })
    },{
        name: "Greece",
        picture: "Greece.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, pictureCross: true })
    },{
        name: "Grenada",
        picture: "Grenada.svg",
        props: getFlagProps({ colorRed: true, colorYellow: true, colorGreen: true, pictureStar: true, pictureTriangle: true, pictureOther: true })
    },{
        name: "Guatemala",
        picture: "Guatemala.svg",
        props: getFlagProps({ linesVertical: true, colorWhite: true, colorBlue: true, pictureOther: true })
    },{
        name: "Guinea-Bissau",
        picture: "Guinea-Bissau.svg",
        props: getFlagProps({ linesVertical: true, linesHorizontal: true, colorRed: true, colorYellow: true, colorGreen: true, colorBlack: true, pictureStar: true })
    },{
        name: "Guinea",
        picture: "Guinea.svg",
        props: getFlagProps({ linesVertical: true, colorRed: true, colorYellow: true, colorGreen: true })
    },{
        name: "Guyana",
        picture: "Guyana.svg",
        props: getFlagProps({ colorGreen: true, colorWhite: true, colorYellow: true, colorBlack: true, colorRed: true, pictureTriangle: true })
    },{
        name: "Haiti",
        picture: "Haiti.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, pictureOther: true })
    },{
        name: "Honduras",
        picture: "Honduras.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, pictureStar: true })
    },{
        name: "Hungary",
        picture: "Hungary.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorRed: true, colorGreen: true })
    },{
        name: "Iceland",
        picture: "Iceland.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, colorRed: true, pictureCross: true })
    },{
        name: "India",
        picture: "India.svg",
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorWhite: true, colorGreen: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Indonesia",
        picture: "Indonesia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true })
    },{
        name: "Iran",
        picture: "Iran.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorRed: true, colorWhite: true, pictureOther: true })
    },{
        name: "Iraq",
        picture: "Iraq.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlack: true, pictureOther: true })
    },{
        name: "Ireland",
        picture: "Ireland.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorWhite: true, colorYellow: true })
    },{
        name: "Israel",
        picture: "Israel.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, pictureStar: true, pictureOther: true })
    },{
        name: "Italy",
        picture: "Italy.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorRed: true, colorWhite: true })
    },{
        name: "Jamaica",
        picture: "Jamaica.svg",
        props: getFlagProps({ colorGreen: true, colorYellow: true, colorBlack: true, pictureTriangle: true })
    },{
        name: "Japan",
        picture: "Japan.svg",
        props: getFlagProps({ colorWhite: true, colorRed: true, pictureCircle: true })
    },{
        name: "Jordan",
        picture: "Jordan.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlack: true, colorWhite: true, colorGreen: true, pictureTriangle: true, pictureStar: true })
    },{
        name: "Kazakhstan",
        picture: "Kazakhstan.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Kenya",
        picture: "Kenya.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorWhite: true, colorRed: true, colorGreen: true, pictureOther: true })
    },{
        name: "Kiribati",
        picture: "Kiribati.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorYellow: true, colorWhite: true, colorBlue: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Kosovo",
        picture: "Kosovo.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, colorYellow: true, pictureStar: true, pictureOther: true })
    },{
        name: "Kuwait",
        picture: "Kuwait.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorRed: true, colorBlack: true, pictureOther: true })
    },{
        name: "Kyrgyzstan",
        picture: "Kyrgyzstan.svg",
        props: getFlagProps({ colorRed: true, colorYellow: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Laos",
        picture: "Laos.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorWhite: true, pictureCircle: true })
    },{
        name: "Latvia",
        picture: "Latvia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true })
    },{
        name: "Lebanon",
        picture: "Lebanon.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, pictureOther: true })
    },{
        name: "Lesotho",
        picture: "Lesotho.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorGreen: true, colorBlack: true, pictureOther: true })
    },{
        name: "Liberia",
        picture: "Liberia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, pictureStar: true })
    },{
        name: "Libya",
        picture: "Libya.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlack: true, colorWhite: true, colorGreen: true, pictureStar: true, pictureCrescent: true })
    },{
        name: "Liechtenstein",
        picture: "Liechtenstein.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorYellow: true, colorBlack: true, pictureOther: true })
    },{
        name: "Lithuania",
        picture: "Lithuania.svg",
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorGreen: true, colorRed: true })
    },{
        name: "Luxembourg",
        picture: "Luxembourg.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true })
    },{
        name: "Madagascar",
        picture: "Madagascar.svg",
        props: getFlagProps({ linesHorizontal: true, linesVertical: true, colorWhite: true, colorRed: true, colorGreen: true })
    },{
        name: "Malawi",
        picture: "Malawi.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorGreen: true, colorBlack: true, pictureOther: true })
    },{
        name: "Malaysia",
        picture: "Malaysia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, colorYellow: true, pictureCrescent: true, pictureOther: true })
    },{
        name: "Maldives",
        picture: "Maldives.svg",
        props: getFlagProps({ colorRed: true, colorGreen: true, colorWhite: true, pictureCrescent: true })
    },{
        name: "Mali",
        picture: "Mali.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorYellow: true, colorRed: true })
    },{
        name: "Malta",
        picture: "Malta.svg",
        props: getFlagProps({ linesVertical: true, colorWhite: true, colorRed: true, pictureCross: true })
    },{
        name: "Mauritania",
        picture: "Mauritania.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorGreen: true, colorYellow: true, pictureCrescent: true, pictureStar: true })
    },{
        name: "Mauritius",
        picture: "Mauritius.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorYellow: true, colorGreen: true })
    },{
        name: "Mexico",
        picture: "Mexico.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorWhite: true, colorRed: true, pictureOther: true })
    },{
        name: "Moldova",
        picture: "Moldova.svg",
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorRed: true, pictureOther: true })
    },{
        name: "Monaco",
        picture: "Monaco.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true })
    },{
        name: "Mongolia",
        picture: "Mongolia.svg",
        props: getFlagProps({ linesVertical: true, colorRed: true, colorYellow: true, colorBlue: true, pictureOther: true })
    },{
        name: "Montenegro",
        picture: "Montenegro.svg",
        props: getFlagProps({ colorYellow: true, colorRed: true, pictureOther: true })
    },{
        name: "Morocco",
        picture: "Morocco.svg",
        props: getFlagProps({ colorRed: true, colorGreen: true, pictureStar: true })
    },{
        name: "Mozambique",
        picture: "Mozambique.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorRed: true, colorYellow: true, colorBlack: true, colorWhite: true, pictureStar: true, pictureTriangle: true, pictureOther: true })
    },{
        name: "Myanmar",
        picture: "Myanmar.svg",
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorGreen: true, colorRed: true, colorWhite: true, pictureStar: true })
    },{
        name: "Namibia",
        picture: "Namibia.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, colorWhite: true, colorRed: true, colorGreen: true, pictureTriangle: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Nauru",
        picture: "Nauru.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorYellow: true, colorWhite: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Nepal",
        picture: "Nepal.svg",
        props: getFlagProps({ colorRed: true, colorBlue: true, colorWhite: true, pictureTriangle: true, pictureOther: true, pictureCircle: true,  })
    },{
        name: "New Zealand",
        picture: "New_Zealand.svg",
        props: getFlagProps({ colorWhite: true, colorBlue: true, colorRed: true, pictureCross: true, pictureStar: true })
    },{
        name: "Nicaragua",
        picture: "Nicaragua.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, pictureCircle: true, pictureTriangle: true, pictureOther: true })
    },{
        name: "Nigeria",
        picture: "Nigeria.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorWhite: true })
    },{
        name: "Niger",
        picture: "Niger.svg",
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorWhite: true, colorGreen: true, pictureCircle: true })
    },{
        name: "Niue",
        picture: "Niue.svg",
        props: getFlagProps({ colorYellow: true, colorBlue: true, colorRed: true, colorWhite: true, pictureCross: true, pictureStar: true })
    },{
        name: "North Korea",
        picture: "North_Korea.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorRed: true, pictureCircle: true, pictureStar: true })
    },{
        name: "North Macedonia",
        picture: "North_Macedonia.svg",
        props: getFlagProps({ colorRed: true, colorYellow: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Norway",
        picture: "Norway.svg",
        props: getFlagProps({ colorWhite: true, colorBlue: true, colorRed: true, pictureCross: true })
    },{
        name: "Oman",
        picture: "Oman.svg",
        props: getFlagProps({ linesHorizontal: true, linesVertical: true, colorWhite: true, colorRed: true, colorGreen: true, pictureOther: true })
    },{
        name: "Pakistan",
        picture: "Pakistan.svg",
        props: getFlagProps({ linesVertical: true, colorWhite: true, colorGreen: true, pictureCrescent: true, pictureStar: true })
    },{
        name: "Palau",
        picture: "Palau.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, pictureCircle: true })
    },{
        name: "Palestine",
        picture: "Palestine.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorWhite: true, colorGreen: true, colorRed: true, pictureTriangle: true })
    },{
        name: "Panama",
        picture: "Panama.svg",
        props: getFlagProps({ colorRed: true, colorBlue: true, colorWhite: true, pictureStar: true })
    },{
        name: "Papua New Guinea",
        picture: "Papua_New_Guinea.svg",
        props: getFlagProps({ colorRed: true, colorBlack: true, colorYellow: true, colorWhite: true, pictureStar: true, pictureOther: true })
    },{
        name: "Paraguay",
        picture: "Paraguay.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Peru",
        picture: "Peru.svg",
        props: getFlagProps({ linesVertical: true, colorRed: true, colorWhite: true })
    },{
        name: "Poland",
        picture: "Poland.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true })
    },{
        name: "Portugal",
        picture: "Portugal.svg",
        props: getFlagProps({ linesVertical: true, colorRed: true, colorGreen: true, colorYellow: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Qatar",
        picture: "Qatar.svg",
        props: getFlagProps({ linesVertical: true, colorRed: true, colorWhite: true, pictureOther: true })
    },{
        name: "Romania",
        picture: "Romania.svg",
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorRed: true })
    },{
        name: "Russia",
        picture: "Russia.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorBlue: true, colorRed: true })
    },{
        name: "Rwanda",
        picture: "Rwanda.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorYellow: true, colorGreen: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Saint Kitts and Nevis",
        picture: "Saint_Kitts_and_Nevis.svg",
        props: getFlagProps({ colorGreen: true, colorYellow: true, colorBlack: true, colorWhite: true, colorRed: true, pictureStar: true, pictureTriangle: true })
    },{
        name: "Saint Lucia",
        picture: "Saint_Lucia.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, colorBlack: true, colorYellow: true, pictureTriangle: true })
    },{
        name: "Saint Vincent and the Grenadines",
        picture: "Saint_Vincent_and_the_Grenadines.svg",
        props: getFlagProps({ linesVertical: true, colorBlue: true, colorYellow: true, colorGreen: true, pictureOther: true })
    },{
        name: "Samoa",
        picture: "Samoa.svg",
        props: getFlagProps({ colorWhite: true, colorBlue: true, colorRed: true, pictureStar: true })
    },{
        name: "San Marino",
        picture: "San_Marino.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorBlue: true, pictureOther: true })
    },{
        name: "Sao Tome and Principe",
        picture: "Sao_Tome_and_Principe.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorBlack: true, colorYellow: true, colorRed: true, pictureTriangle: true, pictureStar: true })
    },{
        name: "Saudi Arabia",
        picture: "Saudi_Arabia.svg",
        props: getFlagProps({ colorGreen: true, colorWhite: true, pictureOther: true })
    },{
        name: "Senegal",
        picture: "Senegal.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorYellow: true, colorRed: true, pictureStar: true })
    },{
        name: "Serbia",
        picture: "Serbia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlue: true, colorWhite: true, pictureOther: true })
    },{
        name: "Seychelles",
        picture: "Seychelles.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, colorRed: true, colorWhite: true, colorGreen: true, pictureTriangle: true })
    },{
        name: "Sierra Leone",
        picture: "Sierra_Leone.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorBlue: true })
    },{
        name: "Singapore",
        picture: "Singapore.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, pictureStar: true, pictureCrescent: true })
    },{
        name: "Slovakia",
        picture: "Slovakia.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorBlue: true, colorRed: true, pictureOther: true })
    },{
        name: "Slovenia",
        picture: "Slovenia.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorBlue: true, colorRed: true, pictureOther: true })
    },{
        name: "Somalia",
        picture: "Somalia.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, pictureStar: true })
    },{
        name: "Somaliland",
        picture: "Somaliland.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorRed: true, colorBlack: true, pictureStar: true, pictureOther: true })
    },{
        name: "South Africa",
        picture: "South_Africa.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorGreen: true, colorBlue: true, colorYellow: true, colorBlack: true, pictureTriangle: true })
    },{
        name: "South Korea",
        picture: "South_Korea.svg",
        props: getFlagProps({ colorWhite: true, colorBlack: true, colorRed: true, colorBlue: true, pictureCircle: true, pictureOther: true })
    },{
        name: "South Ossetia",
        picture: "South_Ossetia.svg",
        props: getFlagProps({ linesHorizontal: true, colorWhite: true, colorRed: true, colorYellow: true })
    },{
        name: "South Sudan",
        picture: "South_Sudan.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorWhite: true, colorRed: true, colorGreen: true, colorBlue: true, colorYellow: true, pictureTriangle: true, pictureStar: true })
    },{
        name: "Spain",
        picture: "Spain.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorYellow: true, pictureOther: true })
    },{
        name: "Sri Lanka",
        picture: "Sri_Lanka.svg",
        props: getFlagProps({ linesVertical: true, colorYellow: true, colorGreen: true, colorRed: true, pictureOther: true })
    },{
        name: "Sudan",
        picture: "Sudan.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlack: true, colorGreen: true, pictureTriangle: true })
    },{
        name: "Suriname",
        picture: "Suriname.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorRed: true, colorYellow: true, pictureStar: true })
    },{
        name: "Sweden",
        picture: "Sweden.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, pictureCross: true })
    },{
        name: "Switzerland",
        picture: "Switzerland.svg",
        props: getFlagProps({ colorRed: true, colorWhite: true, pictureCross: true })
    },{
        name: "Syria",
        picture: "Syria.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlack: true, colorGreen: true, pictureStar: true })
    },{
        name: "Tajikistan",
        picture: "Tajikistan.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorGreen: true, colorYellow: true, pictureStar: true, pictureOther: true })
    },{
        name: "Tanzania",
        picture: "Tanzania.svg",
        props: getFlagProps({ colorGreen: true, colorYellow: true, colorBlack: true, colorBlue: true, pictureTriangle: true })
    },{
        name: "Thailand",
        picture: "Thailand.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true })
    },{
        name: "The Cook Islands",
        picture: "the_Cook_Islands.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, colorRed: true, pictureCircle: true, pictureStar: true, pictureCross: true })
    },{
        name: "The Federated States of Micronesia",
        picture: "the_Federated_States_of_Micronesia.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, pictureStar: true })
    },{
        name: "The Gambia",
        picture: "The_Gambia.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, colorGreen: true })
    },{
        name: "The Marshall Islands",
        picture: "the_Marshall_Islands.svg",
        props: getFlagProps({ colorBlue: true, colorWhite: true, colorYellow: true, pictureOther: true })
    },{
        name: "The Netherlands",
        picture: "the_Netherlands.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true })
    },{
        name: "The Philippines",
        picture: "the_Philippines.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorRed: true, colorWhite: true, colorYellow: true, pictureStar: true, pictureOther: true })
    },{
        name: "The Republic of Abkhazia",
        picture: "the_Republic_of_Abkhazia.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorWhite: true, colorRed: true, pictureStar: true, pictureOther: true })
    },{
        name: "The Republic of China (Taiwan)",
        picture: "the_Republic_of_China.svg",
        props: getFlagProps({ colorRed: true, colorBlue: true, colorWhite: true, pictureCircle: true, pictureOther: true })
    },{
        name: "The Sahrawi Arab Democratic Republic",
        picture: "the_Sahrawi_Arab_Democratic_Republic.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorWhite: true, colorGreen: true, colorRed: true, pictureTriangle: true, pictureCrescent: true, pictureStar: true })
    },{
        name: "The Solomon Islands",
        picture: "the_Solomon_Islands.svg",
        props: getFlagProps({ colorBlue: true, colorYellow: true, colorGreen: true, colorWhite: true, pictureTriangle: true, pictureStar: true })
    },{
        name: "The Turkish Republic of Northern Cyprus",
        picture: "the_Turkish_Republic_of_Northern_Cyprus.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, pictureStar: true, pictureCrescent: true })
    },{
        name: "The United Arab Emirates",
        picture: "the_United_Arab_Emirates.svg",
        props: getFlagProps({ linesHorizontal: true, linesVertical: true, colorGreen: true, colorWhite: true, colorBlack: true, colorRed: true })
    },{
        name: "The United Kingdom",
        picture: "the_United_Kingdom.svg",
        props: getFlagProps({ colorRed: true, colorBlue: true, colorWhite: true, pictureCross: true })
    },{
        name: "The United States",
        picture: "the_United_States.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlue: true, pictureStar: true })
    },{
        name: "The Vatican City",
        picture: "the_Vatican_City.svg",
        props: getFlagProps({ linesVertical: true, colorYellow: true, colorWhite: true, pictureOther: true })
    },{
        name: "Togo",
        picture: "Togo.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorYellow: true, colorRed: true, colorWhite: true, pictureStar: true })
    },{
        name: "Tonga",
        picture: "Tonga.svg",
        props: getFlagProps({ colorWhite: true, colorRed: true, pictureCross: true })
    },{
        name: "Transnistria",
        picture: "Transnistria_(state).svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorGreen: true, colorYellow: true, pictureStar: true, pictureOther: true })
    },{
        name: "Trinidad and Tobago",
        picture: "Trinidad_and_Tobago.svg",
        props: getFlagProps({ colorRed: true, colorBlack: true, colorWhite: true, pictureTriangle: true })
    },{
        name: "Tunisia",
        picture: "Tunisia.svg",
        props: getFlagProps({ colorRed: true, colorWhite: true, pictureCircle: true, pictureCrescent: true, pictureStar: true })
    },{
        name: "Turkey",
        picture: "Turkey.svg",
        props: getFlagProps({ colorRed: true, colorWhite: true, pictureStar: true, pictureCrescent: true })
    },{
        name: "Turkmenistan",
        picture: "Turkmenistan.svg",
        props: getFlagProps({ colorGreen: true, colorRed: true, colorYellow: true, pictureStar: true, pictureCrescent: true, pictureOther: true })
    },{
        name: "Tuvalu",
        picture: "Tuvalu.svg",
        props: getFlagProps({ colorYellow: true, colorBlue: true, colorRed: true, colorWhite: true, pictureStar: true })
    },{
        name: "Uganda",
        picture: "Uganda.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlack: true, colorYellow: true, colorRed: true, pictureCircle: true, pictureOther: true })
    },{
        name: "Ukraine",
        picture: "Ukraine.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorYellow: true })
    },{
        name: "Uruguay",
        picture: "Uruguay.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorYellow: true, pictureOther: true })
    },{
        name: "Uzbekistan",
        picture: "Uzbekistan.svg",
        props: getFlagProps({ linesHorizontal: true, colorBlue: true, colorWhite: true, colorRed: true, colorGreen: true, pictureCrescent: true, pictureStar: true })
    },{
        name: "Vanuatu",
        picture: "Vanuatu.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorBlack: true, colorYellow: true, colorGreen: true, pictureTriangle: true, pictureOther: true })
    },{
        name: "Venezuela",
        picture: "Venezuela.svg",
        props: getFlagProps({ linesHorizontal: true, colorYellow: true, colorBlue: true, colorRed: true, colorWhite: true, pictureStar: true })
    },{
        name: "Vietnam",
        picture: "Vietnam.svg",
        props: getFlagProps({ colorRed: true, colorYellow: true, pictureStar: true })
    },{
        name: "Yemen",
        picture: "Yemen.svg",
        props: getFlagProps({ linesHorizontal: true, colorRed: true, colorWhite: true, colorBlack: true })
    },{
        name: "Zambia",
        picture: "Zambia.svg",
        props: getFlagProps({ linesVertical: true, colorGreen: true, colorRed: true, colorBlack: true, colorYellow: true, pictureOther: true })
    },{
        name: "Zimbabwe",
        picture: "Zimbabwe.svg",
        props: getFlagProps({ linesHorizontal: true, colorGreen: true, colorYellow: true, colorRed: true, colorBlack: true, colorWhite: true, pictureTriangle: true, pictureStar: true, pictureOther: true })
    }
];
