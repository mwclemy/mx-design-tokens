const light = core => ({
  Input: core.FontSize.Body,
  InputLabel: core.FontSize.Small,
  InputHelpText: core.FontSize.Small,
  DropdownItem: core.FontSize.Body,
  DropdownChip: core.FontSize.Tiny,
  TextArea: core.FontSize.Body,
  TextAreaHelpText: core.FontSize.Small,
  ModalHeader: core.FontSize.H3,
  ButtonLinkSmall: core.FontSize.Small,
  ButtonLinkLarge: core.FontSize.Body,
  Button: core.FontSize.Body,
  TooltipHeadline: core.FontSize.Body,
  TooltipText: core.FontSize.ParagraphSmall,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
