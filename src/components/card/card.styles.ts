import { makeStyles } from '@material-ui/styles';

interface CarStylesProps {
  height: string | number;
}

export const useStyles = makeStyles({
  wrapper: ({ height }: CarStylesProps) => ({
    padding: '17px 20px',
    boxShadow: '0 -1px 30px 0 rgba(220, 220, 220, 0.5)',
    position: 'relative',
    height
  }),
  title: {
    fontSize: '18px',
    fontWeight: 700
  }
});
