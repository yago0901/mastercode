export interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}
