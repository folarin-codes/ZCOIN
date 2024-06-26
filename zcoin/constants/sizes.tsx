import { COLORS } from "./Colors";

const FontStyles = {
    title:{
        color: COLORS.white,
        fontFamily : 'std',
        fontWeight:"700",
        fontSize:28,
    },
    heading:{
        color: COLORS.primaryText,
        fontFamily : 'std',
        fontWeight:"700",
        fontSize:20,
    },
    primaryText:{
        color: COLORS.primaryText,
        fontSize: 16,
        fontWeight: "500",
        fontFamily :'std'
    },

    secondaryText:{
        color: COLORS.secondaryText,
        fontSize: 16,
        fontWeight: "500",
        fontFamily :'std'
    },
    tertiaryText:{
        color: COLORS.tertiaryText,
        fontSize:12,
        fontFamily:'std'
    },
    small:{
        fontSize:10,
        color:'white',
        lineHeight: 12.65
    }

}


export default FontStyles;