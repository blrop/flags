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
    },
];
