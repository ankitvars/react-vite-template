import React from 'react';
import {
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  IconButton,
  Box,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterListIcon from '@mui/icons-material/FilterList';

const ToolbarComponent: React.FC = () => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [tabIndex, setTabIndex] = React.useState(0);

  /**
   * Handle toggle between grid and list view
   * @param _event Mouse event
   * @param nextView New view value
   */
  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextView: 'grid' | 'list' | null
  ) => {
    if (nextView !== null) {
      setView(nextView);
      console.log('View changed to:', nextView);
    }
  };

  /**
   * Handle typing in the search input
   * @param event Change event for input
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log('Search term:', event.target.value);
  };

  /**
   * Handle changing tabs
   * @param _event Synthetic event
   * @param newValue Index of selected tab
   */
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    console.log('Tab changed to index:', newValue);
  };

  /**
   * Handle clicking the filter button
   */
  const handleFilterClick = () => {
    console.log('Filters button clicked');
  };

  return (
    <Stack direction="row" alignItems="center" sx={{ width: '100%', p: 2, color:"white" }}>
      {/* View toggle buttons */}
      <ToggleButtonGroup
        value={view}
        exclusive
        size="small"
        onChange={handleViewChange}
        aria-label="view toggle"
        sx={{ borderRadius: 1, borderColor:"1px solid rgba(145, 158, 171, 0.08)" }}
      >
        <ToggleButton value="grid" aria-label="grid view">
          <AppsIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list view">
          <ViewListIcon fontSize="small" />
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Search input */}
      <TextField
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        sx={{ ml: 2, width: 200 }}
      />

      {/* Centered tabs */}
      <Box sx={{ flexGrow: 1, ml: 4 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          aria-label="main tabs"
        >
          <Tab icon={<AppsIcon />} label="All Presales" />
          <Tab icon={<ScienceIcon />} label="My Contributions" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
        </Tabs>
      </Box>

      {/* Filters button */}
      <IconButton
        size="small"
        onClick={handleFilterClick}
        aria-label="filters"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <FilterListIcon fontSize="small" />
        <Box component="span" sx={{ ml: 1, fontSize: '0.875rem' }}>
          Filters
        </Box>
      </IconButton>
    </Stack>
  );
};

export default ToolbarComponent;
