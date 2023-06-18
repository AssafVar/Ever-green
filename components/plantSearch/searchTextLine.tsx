import React, { useContext, useState } from 'react';
import { IconButton, Menu, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { DELETE_ALL_SEARCH, DELETE_SINGLE_SEARCH } from '@/graphql/queries';
import { DateText, OptionText, RedListItemIcon, SearchItem, SearchText, StyledMenuItem } from './styles';
import { Search } from '@/typings';
import { userContext } from '@/lib/contexts/userContext';

type SearchLineTextProps = {
    searchItem: Search,
    updateSearch: (text: string) => void,
    updateSearchList: (item: Search | string, action: string) => void,
}

const SearchTextLine = ({ searchItem, updateSearch, updateSearchList }: SearchLineTextProps) => {
    const {user} = useContext(userContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [onDeleteButton, setOnDeleteButton] = useState<string>('');

    const [deleteSingleSearchMutation, { loading, error, data }] = useMutation(DELETE_SINGLE_SEARCH);
    const [deleteAllSearchMutation] = useMutation(DELETE_ALL_SEARCH);

    const handleDeleteSearch = (id: string, deleteOption: string) => {
        console.log(id, deleteOption);
        deleteOption === "current"
            ? deleteSingleSearchMutation({
                variables: {
                    id: searchItem.id
                }
            }).then(() => {
                updateSearchList(id, 'delete')
            })
            : deleteAllSearchMutation({
                variables: {
                    email: user?.email
                }
            }).then(() => {
                updateSearchList('all', 'deleteAll');
            })
        updateSearchList
    };

    return (
        <>
            <SearchItem key={searchItem.id} onClick={() => searchItem?.searchString && updateSearch(searchItem.searchString)}>
                <Box display="flex" alignItems="center">

                    <SearchText variant="subtitle1" title={searchItem.searchString} onClick={() => searchItem?.searchString && updateSearch(searchItem.searchString)}>
                        {searchItem.searchString}
                    </SearchText>

                </Box>
                <div className='flex items-center'>
                {searchItem?.createdAt && <DateText variant="subtitle2" sx={{ fontSize: "10px" }}>
                        {format(new Date(Number(searchItem?.createdAt)), 'dd/MM, hh:mm')}
                    </DateText>}
                    <IconButton color={anchorEl ? 'primary' : 'default'}
                        aria-label="delete" onClick={(event) => setAnchorEl(event.currentTarget)} >
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
                        <StyledMenuItem onClick={() => handleDeleteSearch(searchItem.id, "current")} onMouseOver={()=>setOnDeleteButton('single')} onMouseLeave={()=>setOnDeleteButton('')}>
                            <ListItemIcon >
                                <DeleteIcon fontSize="small" color={onDeleteButton==='single' ? 'primary' : 'inherit'} />
                            </ListItemIcon>
                            <OptionText color={onDeleteButton==='single' ? 'primary' : 'inherit'}>Current</OptionText>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => handleDeleteSearch('12', "all")} onMouseOver={()=>setOnDeleteButton('all')} onMouseLeave={()=>setOnDeleteButton('')}>
                            <ListItemIcon>
                                <DeleteIcon fontSize="small" color={onDeleteButton==='all' ? 'warning' : 'inherit'}/>
                            </ListItemIcon>
                            <OptionText color={onDeleteButton==='all' ? 'warning' : 'inherit'}>All</OptionText>
                        </StyledMenuItem>
                    </Menu>
                </div>
            </SearchItem>
        </>
    )
}

export default SearchTextLine;
