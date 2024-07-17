// components/TableRow.tsx
import React from 'react';
import movieService from '@/services/movieService';
import Link from 'next/link';
import styles from '../styles/components/General.module.css';

interface Movie {
    id: number;
    title: string;
    release_date: string;
}

interface TableRowProps {
  movie: Movie;
}

const TableRow: React.FC<TableRowProps> = ({ movie }) => {
  return (
    <tr className="border-b border-gray-300">
      <td className="border-r border-gray-300 px-4 py-2">{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.release_date}</td>
      <td className="border px-4 py-2">
        <Link href={`/movie/${movie.id}`}>
          <div className={styles.button_detail}>Detail</div>
        </Link>
        </td>
    </tr>
  );
};

export default TableRow;
