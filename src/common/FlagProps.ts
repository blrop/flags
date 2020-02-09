export default interface FlagProps {
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
    pictureSun?: boolean,
    pictureCircle?: boolean,
    pictureTriangle?: boolean,
    pictureCrescent?: boolean,
    pictureOther?: boolean,
}

// we need this because Object.keys returns string[] instead of "keyof"
export const FLAG_PROPS_KEYS: (keyof FlagProps)[] = [
    'linesHorizontal',
    'linesVertical',

    'colorWhite',
    'colorBlack',
    'colorRed',
    'colorGreen',
    'colorBlue',
    'colorYellow',

    'pictureCross',
    'pictureStar',
    'pictureSun',
    'pictureCircle',
    'pictureTriangle',
    'pictureCrescent',
    'pictureOther'
];