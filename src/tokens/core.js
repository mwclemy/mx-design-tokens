import { targets } from '../index'
// This should probably not be modified

const addPx = obj => {
  const newObj = {}

  Object.keys(obj).forEach(key => {
    newObj[key] = `${obj[key]}px`
  })

  return newObj
}

export default {
  Color: {
    Primary100: "#EAF1FB",
    Primary200: "#6FA1EC",
    Primary300: "#2F73DA",
    Primary400: "#165ECC",
    Primary500: "#034AB3",
    NeutralWhite: "#FFFFFF",
    Neutral100: "#F8F9FB",
    Neutral200: "#EEF1F6",
    Neutral300: "#E4E8EE",
    Neutral400: "#CDD3DD",
    Neutral500: "#A8B1BD",
    Neutral600: "#6A7381",
    Neutral700: "#49505A",
    Neutral800: "#1F2329",
    Neutral900: "#121417",
    Success100: "#DDFDED",
    Success200: "#0AC295",
    Success300: "#09A57F",
    Success400: "#078364",
    Success500: "#027357",
    Warning100: "#FEF7B9",
    Warning200: "#FFDA6C",
    Warning300: "#FFB400",
    Warning400: "#E07C02",
    Warning500: "#C33E01",
    Error100: "#FCD2CF",
    Error200: "#F45532",
    Error300: "#DF320C",
    Error400: "#C61A0B",
    Error500: "#AE0A0A",
    TransparentNeutral100: "rgba(247, 249, 252, 0.55)",
    TransparentNeutral400: "rgba(203, 211, 223, 0.55)",
    TransparentScrim: "rgba(0, 0, 0, 0.25)",
    TransparentScrimDarker: "rgba(0, 0, 0, 0.50)",
  },
  Font: {
    Thin: 'ProximaNovaThin, Helvetica, Arial, sans-serif',
    Light: 'ProximaNovaLight, Helvetica, Arial, sans-serif',
    Regular: 'ProximaNovaRegular, Helvetica, Arial, sans-serif',
    Italic: 'ProximaNovaRegularItalic, Helvetica, Arial, sans-serif',
    Semibold: 'ProximaNovaSemibold, Helvetica, Arial, sans-serif',
    Bold: 'ProximaNovaBold, Helvetica, Arial, sans-serif',
  },
  BoxShadow: target => {
    if (target === targets.REACT) {
      return {
        Low: ' 0px 1px 3px rgba(87, 102, 117, 0.2)',
        Medium: ' 0px 3px 8px rgba(87, 102, 117, 0.15)',
        High: ' 0px 10px 20px rgba(87, 102, 117, 0.16)',
        Top: ' 0px -1px 3px rgba(87, 102, 117, 0.2)',
        Left: ' -1px 0px 3px rgba(87, 102, 117, 0.2)',
        Right: ' 1px 0px 3px rgba(87, 102, 117, 0.2)',
        Focus: '0px 0px 0px 2px rgba(82, 138, 224, 0.8)',
      }
    }

    // TODO: explore mobile solutions more
    return {
      Low: '',
      Medium: '',
      High: '',
      Top: '',
      Left: '',
      Right: '',
      Focus: ''
    }
  },
  BorderRadius: {
    Small: 2,
    Medium: 4,
    Large: 8,
    XLarge: 16,
  },
  FontSize: {
    Tiny: 10,
    XSmall: 12,
    Small: 14,
    ParagraphSmall: 14,
    Body: 16,
    Paragraph: 16,
    H3: 20,
    H2: 24,
    H1: 32,
  },
  FontWeight: {
    Regular: 400,
    Semibold: 600,
    Bold: 700,
  },
  LineHeight: target => {
    const base = {
      Tiny: 12,
      XSmall: 14,
      Small: 16,
      ParagraphSmall: 20,
      Body: 20,
      Paragraph: 24,
      H3: 24,
      H2: 32,
      H1: 40,
    }

    if (target === targets.REACT) {
      return addPx(base)
    }

    return base
  },
  Spacing: {
    Tiny: 4,
    XSmall: 8,
    Small: 12,
    Medium: 16,
    Large: 24,
    XLarge: 32,
    XXLarge: 40,
    XXXLarge: 48,
    Jumbo: 64,
    SuperJumbo: 96,
  },
  Time: {
    Short: 300,
    Med: 500,
    Long: 1000,
  },
  Easing: target => {
    if (target === targets.REACT) {
      return {
        Default: "cubic-bezier(.475,.425,0,.995)"
      }
    }

    // TODO: Define type cubic-bezier?
    return {
      Default: {
        x1: 0.475,
        y1: 0.425,
        x2: 0,
        y2: 0.995
      }
    }
  },
  // Convenience values as web consumes both constantly
  MediaQuery: {
    Small: '576px',
    Med: '768px',
    Large: '992px',
    XLarge: '1200px',
  },
  Resolution: {
    Small: 576,
    Med: 768,
    Large: 992,
    XLarge: 1200,
  }
}
