import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Paper from '@material-ui/core/Paper/Paper';
import TextField from '@material-ui/core/TextField/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Chip from '@material-ui/core/Chip/Chip';
import Avatar from '@material-ui/core/Avatar/Avatar';
import dayjs from 'dayjs';

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export const Facility: React.FC = () => {
  const style = useStyle();
  return (
    <Container maxWidth="sm" className={style.root}>
      <Paper>
        <TextField label="設備名" fullWidth />
        <TextField label="詳細" fullWidth multiline />
        <InputLabel shrink>登録者</InputLabel>
        <p>
          <Chip
            label="とうろくしゃ"
            avatar={<Avatar src="https://bit.ly/3pM3urc" />}
          />
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm')}
        </p>
        <InputLabel shrink>更新者</InputLabel>
        <p>
          <Chip
            label="こうしんしゃ"
            avatar={<Avatar src="https://bit.ly/3pM3urc" />}
          />
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm')}
        </p>
      </Paper>
    </Container>
  );
};
