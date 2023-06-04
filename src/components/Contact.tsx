import { Avatar, Box, Button, Typography } from "@mui/material";
import type { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        right: 0,
        width: "17%",
        height: "calc(100vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: 8,
        },
        "&::-webkit-scrollbar-thumb": {
          bgcolor: "#aaaa",
          borderRadius: 5,
        },
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: 18, mt: "1rem" }}>
        Người liên hệ
      </Typography>
      <Box display="flex" flexDirection="column" sx={{ mt: 1 }}>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/343445807_1360456941462469_7547554589194455560_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3J1G_4RFjkEAX-y34HD&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAW-K_Pm5_NnqaIJcPooEeT7RC3gtuOaXniN_QAkKqn6w&oe=646E5A85"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Thuy Linh
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/343445807_1360456941462469_7547554589194455560_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3J1G_4RFjkEAX-y34HD&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAW-K_Pm5_NnqaIJcPooEeT7RC3gtuOaXniN_QAkKqn6w&oe=646E5A85"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Le Duc
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/343445807_1360456941462469_7547554589194455560_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3J1G_4RFjkEAX-y34HD&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAW-K_Pm5_NnqaIJcPooEeT7RC3gtuOaXniN_QAkKqn6w&oe=646E5A85"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Le Duc Son
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
        <Button sx={{ justifyContent: "start", borderRadius: 2 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              outline: "solid 1px #aaa",
              mr: 2,
            }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/301709738_1399597433858436_5941239372223188498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Xip2zPpfIYsAX_4wZFy&_nc_ht=scontent.fhan14-2.fna&oh=00_AfB6uFjMHQLkBvN1i2qQtDLS9QYKVesrbY3VqFrk1isXdA&oe=646D9895"
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "initial",
              color: "black",
            }}
          >
            Dinh Thi Thu Ha
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
