import React from 'react'
import { Pagination as PaginationAntd } from 'antd';

import "./Pagination.scss";

export default function Pagination(props) {

    const { postt, location, history } = props;
    const currentPage = parseInt(postt.page);

    const onChangePage = newPage =>{
        history.push(`${location.pathname}?page=${newPage}`);
    }

    return (
        <PaginationAntd
            defaultCurrent={currentPage}
            total={postt.total}
            pageSize={postt.limit}
            onChange={newPage => onChangePage(newPage)}
            className="pagination"
        />
    )
}
