import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import "../../../src/index.css";
import InfoIcon from '@mui/icons-material/Info';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../theme";
import { experiences } from "../../data/mockData";
import { min } from "lodash";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ExperienceCard = ({ experience }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      lineColor={"black"}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[50%] object-contain"
          />
        </div>
      }
    >
      <Stack direction="row" className="modal1">
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <h4>{experience.date}</h4>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <div>
          <Button onClick={handleOpen} sx={{ color: "white" }} p="2">
            <InfoIcon />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ }}>
                <Typography>
                  {experience.name1} -
                  <Link href="https://omms.nic.in/QualityMonitoringArea/QualityMonitoring/InspectionGradingDetails?id=239154$S">
                    {experience.type1}
                  </Link>
                </Typography>
                <Typography>
                  {experience.name2} -
                  <Link href="https://omms.nic.in/QualityMonitoringArea/QualityMonitoring/InspectionGradingDetails?id=239154$S">
                  {experience.type2}
                  </Link>
                </Typography>
              </Typography>
            </Box>
          </Modal>
        </div>
      </Stack>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Geography = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleDisplay = () => {
    setIsVisible(!isVisible);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <Box m="20px">
    //   <Header title="Geography" subtitle="Simple Geography Chart" />

    //   <Box
    //     height="75vh"
    //     border={`1px solid ${colors.grey[100]}`}
    //     borderRadius="4px"
    //   >
    //     <GeographyChart />
    //   </Box>
    // </Box>

    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          Timeline of the Project
        </p>
        <Stack direction="row" sx={{ marginX: min(2, 63.5), marginY: 2 }} className="roadBox">
          <Box>
            <FormControl sx={{ marginX: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label">Select Road</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Road"
                onChange={handleChange}
              >
                <MenuItem value={10} defaultChecked>
                  None
                </MenuItem>
                <MenuItem value={20}>
                  T13-Balluana to jhumba upto block boundary via chughe kalan
                </MenuItem>
                <MenuItem value={30}>
                  T04-Aklia to Dyalpura Mirja via Bhagta, Gurudwara Jandsar
                  Sahib
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                margin: "3px auto",
              }}
              onClick={toggleDisplay}
            >
              View
            </Button>
          </Box>
        </Stack>
      </div>
      {isVisible && (
        <div>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            T-13 : Balluana to Jhumba
          </h2>

          <h4 className="text-center text-[20px] font-semibold">
            Start Date : 4th June 2021
          </h4>

          <div className="mt-20 flex flex-col">
            <VerticalTimeline lineColor="black">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      )}
    </>
  );
};

export default Geography;
