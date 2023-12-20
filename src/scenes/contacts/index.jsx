import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ReportsSidebar from "../contacts/reportsSidebar";
import { tableReports } from "../../data/reports";
import { useState } from "react";

const Contacts = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age1, setAge1] = React.useState("");
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const [age2, setAge2] = React.useState("");
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const [age3, setAge3] = React.useState("");
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [age4, setAge4] = React.useState("");
  const handleChange4 = (event) => {
    setAge4(event.target.value);
  };
  const [age5, setAge5] = React.useState("");
  const handleChange5 = (event) => {
    setAge5(event.target.value);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isVisible, setIsVisible] = useState(false);

  const toggleDisplay = () => {
    setIsVisible(!isVisible);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  //create a downloader function for a file stored on local machine
  const handleDownload = async () => {
    try {
      // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
      const filePath = '/Users/navansh/Web_Dev_Projects/SIH/dashboard-sih/public/reportas.pdf';

      // Fetch the PDF file content using the local path
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error('Failed to fetch PDF file');
      }

      // Convert the response to a blob
      const pdfBlob = await response.blob();

      // Create a temporary link element
      const link = document.createElement("a");

      // Set the href attribute to the object URL of the Blob
      link.href = URL.createObjectURL(pdfBlob);

      // Set the download attribute to the desired PDF file name
      link.download = "report.pdf"; // Replace with your desired PDF file name

      // Append the link to the body (required for Firefox)
      document.body.appendChild(link);

      // Trigger a click event on the link to start the download
      link.click();

      // Remove the link from the body after the download
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Stack direction="row" spacing={3}>
        <Stack direction="row" spacing={2}>
          <Typography variant="text" sx={{ marginY: 1 }} fontWeight={600}>
            Select District
          </Typography>
          <FormControl sx={{ m: 50, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Select District
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age1}
              label="Age"
              onChange={handleChange1}
            >
              <MenuItem value="">All Districts</MenuItem>
              <MenuItem value="36">Amritsar</MenuItem>
              <MenuItem value="612">Barnala</MenuItem>
              <MenuItem value="60">Bathinda</MenuItem>
              <MenuItem value="178">Faridkot</MenuItem>
              <MenuItem value="181">Fatehgarh Sahib</MenuItem>
              <MenuItem value="613">Fazilka</MenuItem>
              <MenuItem value="183">Firozpur</MenuItem>
              <MenuItem value="207">Gurdaspur</MenuItem>
              <MenuItem value="225">Hoshiarpur</MenuItem>
              <MenuItem value="240">Jalandhar</MenuItem>
              <MenuItem value="275">Kapurthala</MenuItem>
              <MenuItem value="339">Ludhiana</MenuItem>
              <MenuItem value="357">Mansa</MenuItem>
              <MenuItem value="365">Moga</MenuItem>
              <MenuItem value="614">Mohali</MenuItem>
              <MenuItem value="372">Mukatsar</MenuItem>
              <MenuItem value="397">Nawashahar</MenuItem>
              <MenuItem value="615">Pathankot</MenuItem>
              <MenuItem value="423">Patiala</MenuItem>
              <MenuItem value="468">Ropar</MenuItem>
              <MenuItem value="482">Sangrur</MenuItem>
              <MenuItem value="616">Tarn Taran</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="text" sx={{ marginY: 1 }} fontWeight={600}>
            FROM MONTH
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              From Month
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age2}
              label="Age"
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="36">January</MenuItem>
              <MenuItem value="37">February</MenuItem>
              <MenuItem value="38">March</MenuItem>
              <MenuItem value="39">April</MenuItem>
              <MenuItem value="40">May</MenuItem>
              <MenuItem value="41">June</MenuItem>
              <MenuItem value="42">July</MenuItem>
              <MenuItem value="43">August</MenuItem>
              <MenuItem value="44">September</MenuItem>
              <MenuItem value="45">October</MenuItem>
              <MenuItem value="46">November</MenuItem>
              <MenuItem value="47">December</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="text" sx={{ marginY: 1 }} fontWeight={600}>
            From Year
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              From Year
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age3}
              label="Age"
              onChange={handleChange3}
            >
              <MenuItem value="0">Select Year</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2016">2016</MenuItem>
              <MenuItem value="2015">2015</MenuItem>
              <MenuItem value="2014">2014</MenuItem>
              <MenuItem value="2013">2013</MenuItem>
              <MenuItem value="2012">2012</MenuItem>
              <MenuItem value="2011">2011</MenuItem>
              <MenuItem value="2010">2010</MenuItem>
              <MenuItem value="2009">2009</MenuItem>
              <MenuItem value="2008">2008</MenuItem>
              <MenuItem value="2007">2007</MenuItem>
              <MenuItem value="2006">2006</MenuItem>
              <MenuItem value="2005">2005</MenuItem>
              <MenuItem value="2004">2004</MenuItem>
              <MenuItem value="2003">2003</MenuItem>
              <MenuItem value="2002">2002</MenuItem>
              <MenuItem value="2001">2001</MenuItem>
              <MenuItem value="2000">2000</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="text" sx={{ marginY: 1 }} fontWeight={600}>
            To Month
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              To Month
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age4}
              label="Age"
              onChange={handleChange4}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="36">January</MenuItem>
              <MenuItem value="37">February</MenuItem>
              <MenuItem value="38">March</MenuItem>
              <MenuItem value="39">April</MenuItem>
              <MenuItem value="40">May</MenuItem>
              <MenuItem value="41">June</MenuItem>
              <MenuItem value="42">July</MenuItem>
              <MenuItem value="43">August</MenuItem>
              <MenuItem value="44">September</MenuItem>
              <MenuItem value="45">October</MenuItem>
              <MenuItem value="46">November</MenuItem>
              <MenuItem value="47">December</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="text" sx={{ marginY: 1 }} fontWeight={600}>
            To Year
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              To Year
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age5}
              label="Age"
              onChange={handleChange5}
            >
              <MenuItem value="0">Select Year</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2016">2016</MenuItem>
              <MenuItem value="2015">2015</MenuItem>
              <MenuItem value="2014">2014</MenuItem>
              <MenuItem value="2013">2013</MenuItem>
              <MenuItem value="2012">2012</MenuItem>
              <MenuItem value="2011">2011</MenuItem>
              <MenuItem value="2010">2010</MenuItem>
              <MenuItem value="2009">2009</MenuItem>
              <MenuItem value="2008">2008</MenuItem>
              <MenuItem value="2007">2007</MenuItem>
              <MenuItem value="2006">2006</MenuItem>
              <MenuItem value="2005">2005</MenuItem>
              <MenuItem value="2004">2004</MenuItem>
              <MenuItem value="2003">2003</MenuItem>
              <MenuItem value="2002">2002</MenuItem>
              <MenuItem value="2001">2001</MenuItem>
              <MenuItem value="2000">2000</MenuItem>
            </Select>
          </FormControl>
        </Stack>
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
      {isVisible && (
        <div>
          <Stack direction="row" spacing={2} marginTop={2}>
            <Box width="25%">
              <Typography className="border-black">
                <div className="sidebar">
                  {tableReports.map((item, index) => (
                    <ReportsSidebar key={index} item={item} />
                  ))}
                </div>
              </Typography>
            </Box>
            <Box
              m="40px 0 0 0"
              height="75vh"
              width="75%"
              alignContent=""
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            >
              <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
              {/* <h1>Server Fetching Error...</h1> */}
            </Box>
          </Stack>
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                margin: "-2500px 300px",
              }}
              onClick={handleDownload}
              >
              Download Report
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Contacts;
