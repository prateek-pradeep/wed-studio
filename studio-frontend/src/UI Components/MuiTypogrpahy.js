import { Typography } from "@mui/material"

export const MuiTypogrpahy = ({textSize, customText}) => {
  return (
    <div>
      <Typography variant={textSize}
        sx={{ color: 'text.primary', textAlign: 'left' }} >
        {customText || "Default text if customText is not provided"}
      </Typography>
    </div>
  )
}
