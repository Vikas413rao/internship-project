import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import Custombutton from './custombutton';

export default function CustomDialog({
  open,
  onClose,

  title,
  showCloseIcon = false,
  showHeader = false,
  headerBgColor,
  titleColor,
  titleIcon,

  width = 'sm',
  height = 160,
  minWidth,
  minHeight,
  maxWidth = false,

  buttons = [],
  actionssx,

  children,

  paperSx,
  contentSx,
}) {
  const isPresetWidth = typeof width === 'string';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isPresetWidth ? width : false}
      fullWidth={isPresetWidth}
      PaperProps={{
        sx: (theme) => ({
          
          fontFamily: theme.typography.fontFamily,
          '& *': {
            fontFamily: theme.typography.fontFamily,
          },

          ...(!isPresetWidth && { width }),
          height,

          ...(minWidth && { minWidth }),
          ...(minHeight && { minHeight }),

          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',

          ...(typeof paperSx === 'function' ? paperSx(theme) : paperSx),
        }),
      }}
    >
    
      {showHeader && (
        <Box
          sx={{
            height: 40,
            minHeight: 40,
            backgroundColor: headerBgColor ?? '#f1eeee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 1,
          }}
        >
          {title && (
            <DialogTitle
              sx={(theme) => ({
                fontSize: 15,
                fontWeight: 600,
                fontFamily: theme.typography.fontFamily, 
                p: 0,
                pl: 1,
                color: titleColor ?? 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              })}
            >
              {titleIcon ?? null}
              {title}
            </DialogTitle>
          )}

          {showCloseIcon && (
            <IconButton onClick={onClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      )}

     
      <DialogContent
        sx={(theme) => ({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          py: 2,
          fontFamily: theme.typography.fontFamily, 
          ...(typeof contentSx === 'function' ? contentSx(theme) : contentSx),
        })}
      >
        {children}
      </DialogContent>

    
      {buttons.length > 0 && (
        <DialogActions
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            mb: 0.5,
            ...actionssx,
          }}
        >
          {buttons.map((btn, index) => (
            <Custombutton
              key={index}
              label={btn.label}
              onClick={btn.onClick}
              variant={btn.variant ?? 'contained'}
              width={btn.width ?? '100px'}
              height={btn.height ?? '35px'}
              fontSize={btn.fontSize ?? '11px'}
              disabled={btn.disabled ?? false}
              sx={btn.sx}
            />
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
}