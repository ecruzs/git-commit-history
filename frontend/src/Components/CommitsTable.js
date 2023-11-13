import React from 'react';
import { useTable, usePagination } from 'react-table';

const CommitsTable = ({ commits }) => {
  const data = React.useMemo(
    () => commits.map(commit => ({
      author: commit.commit.author.name,
      message: commit.commit.message,
      date: new Date(commit.commit.author.date).toLocaleDateString(),
    })),
    [commits]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Autor',
        accessor: 'author',
      },
      {
        Header: 'Mensaje',
        accessor: 'message',
      },
      {
        Header: 'Fecha',
        accessor: 'date',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({ columns, data }, usePagination);

  return (
    <>
      <table {...getTableProps()} className="min-w-full leading-normal">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Paginación Table */}
      <div className="pagination flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-700 disabled:opacity-50"
        >
          {'<<'}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-700 disabled:opacity-50"
        >
          {'<'}
        </button>
        <span className="px-3 py-1 text-sm font-semibold">
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-700 disabled:opacity-50"
        >
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-700 disabled:opacity-50"
        >
          {'>>'}
        </button>
      </div>

    </>
  );
};

export default CommitsTable;
