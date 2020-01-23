interface FlagProps {
    tricolor?: boolean,
    linesHorizontal?: boolean,
    linesVertical?: boolean,
    colorWhite?: boolean,
    colorBlack?: boolean,
    colorRed?: boolean,
    colorGreen?: boolean,
    colorBlue?: boolean,
    colorYellow?: boolean,
    pictureCross?: boolean,
    pictureStar?: boolean,
    pictureCircle?: boolean,
    pictureTriangle?: boolean,
    pictureCrescent?: boolean,
    pictureOther?: boolean,
}

const getFlagProps = (input: FlagProps): FlagProps => {
    let defaultProps: FlagProps = {
        tricolor: false,
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
        name: 'Russia',
        picture: '',
        props: getFlagProps({
            tricolor: true,
            linesHorizontal: true,
            colorWhite: true,
            colorRed: true,
            colorBlue: true
        })
    }, {
        name: 'Ukraine',
        picture: '',
    }, {
        name: 'Germany',
        picture: '',
    }, {
        name: 'Finland',
        picture: '',
    },
];