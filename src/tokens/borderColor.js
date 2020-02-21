const light = core => ({
  ButtonNeutral: core.Color.Neutral400,
  ButtonNeutralHover: core.Color.Primary400,
  ButtonNeutralDisabled: core.Color.Primary400,
  Input: core.Color.Neutral600,
  InputHover: core.Color.Neutral900,
  InputFocus: core.Color.Primary300,
  InputError: core.Color.Error300,
  InputDisabled: core.Color.TransparentNeutral400,
  ButtonLinkHover: core.Color.Primary400,
  Dropdown: core.Color.Neutral600,
  DropdownHover: core.Color.Neutral900,
  DropdownFocus: core.Color.Primary300,
  DropdownError: core.Color.Error300,
  DropdownDisabled: core.Color.TransparentNeutral400,
  TabActive: core.Color.Primary300,
  Switch: core.Color.Neutral600,
  SwitchDisabled: core.Color.Neutral400,
  Checkbox: core.Color.Neutral600,
  CheckboxChecked: core.Color.Primary300,
  CheckboxDisabled: core.Color.Neutral400,
  Radio: core.Color.Neutral600,
  RadioChecked: core.Color.Primary300,
  RadioDisabled: core.Color.Neutral400,
  RadioDisabledChecked: core.Color.Neutral500,
})

const dark = core => ({
  ...light(core),
  ButtonNeutral: core.Color.Neutral500,
  ButtonNeutralHover: core.Color.Neutral500,
  ButtonNeutralDisabled: core.Color.Neutral600,
  Input: core.Color.Neutral500,
  InputHover: core.Color.NeutralWhite,
  InputFocus: core.Color.Primary200,
  InputError: core.Color.Error200,
  InputDisabled: core.Color.Neutral600,
  ButtonLinkHover: core.Color.NeutralWhite,
  Dropdown: core.Color.Neutral500,
  DropdownHover: core.Color.NeutralWhite,
  DropdownFocus: core.Color.Primary200,
  DropdownError: core.Color.Error200,
  DropdownDisabled: core.Color.Neutral600,
  TabActive: core.Color.Primary200,
  SwitchDisabled: core.Color.Neutral600,
  Checkbox: core.Color.Neutral400,
  CheckboxChecked: core.Color.NeutralWhite,
  CheckboxDisabled: core.Color.Neutral600,
  RadioChecked: core.Color.NeutralWhite,
  RadioDisabled: core.Color.Neutral600,
})

export default {
  light,
  dark,
}
