import React, { useState } from 'react';
import { IconButton, Menu, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { DELETE_ALL_SEARCH, DELETE_SINGLE_SEARCH } from '@/graphql/queries';
import { DateText, OptionText, RedListItemIcon, SearchItem, SearchText, StyledMenuItem } from './styles';


const SearchTextLine = ({ searchItem, updateSearch }: { searchItem: any, updateSearch: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    //const [deleteOption, setDeleteOption] = useState("current");

    const [deleteSingleSearchMutation, { loading, error, data }] = useMutation(DELETE_SINGLE_SEARCH);
    const [deleteAllSearchMutation] = useMutation(DELETE_ALL_SEARCH);

    const handleDeleteSearch = (id:string, deleteOption:string) => {
        console.log(id, deleteOption);
        deleteOption === "current" 
        ? deleteSingleSearchMutation({
            variables: {
                id: searchItem.id
            }
        })
        : deleteAllSearchMutation({
            variables: {
                userId: '12'
            }
        });
    };

    return (
        <>
            <SearchItem key={searchItem.id} onClick={() => updateSearch(searchItem.searchString)}>
                <Box display="flex" alignItems="center">
                    <SearchText variant="subtitle1" title={searchItem.searchString} onClick={() => updateSearch(searchItem.searchString)}>
                        {searchItem.searchString}
                    </SearchText>
                    <DateText variant="subtitle2" sx={{ fontSize: "10px" }}>
                        {format(new Date(+searchItem?.createdAt), "dd/MM")}
                    </DateText>
                </Box>
                <div onMouseLeave={()=>setAnchorEl(null)}>
                    <IconButton aria-label="delete" onMouseOver={(event) => setAnchorEl(event.currentTarget)} >
                        <DeleteIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <StyledMenuItem onClick={() => handleDeleteSearch(searchItem.id,"current")}>
                            <ListItemIcon>
                                <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            <OptionText>Current</OptionText>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => handleDeleteSearch('12',"all")}>
                            <RedListItemIcon>
                                <DeleteIcon fontSize="small" />
                            </RedListItemIcon>
                            <OptionText>All</OptionText>
                        </StyledMenuItem>
                    </Menu>
                </div>
            </SearchItem>
        </>
    )
}

export default SearchTextLine;
