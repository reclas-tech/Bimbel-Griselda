interface IntagramsProps {
  fill?: string;
  className?: string;
}

const Instagrams: React.FC<IntagramsProps> = ({ fill, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
    >
      <path
        d="M12.9965 9.74056C10.6094 9.74056 8.66141 11.7251 8.66141 14.1569C8.66141 16.5887 10.6094 18.5732 12.9965 18.5732C15.3836 18.5732 17.3316 16.5887 17.3316 14.1569C17.3316 11.7251 15.3836 9.74056 12.9965 9.74056ZM25.9985 14.1569C25.9985 12.3281 26.0148 10.5158 25.914 8.69032C25.8132 6.56996 25.3384 4.68814 23.8164 3.13762C22.2911 1.5838 20.4472 1.1034 18.3658 1.0007C16.5706 0.897994 14.7917 0.91456 12.9998 0.91456C11.2046 0.91456 9.42566 0.897994 7.63373 1.0007C5.55236 1.1034 3.70515 1.58711 2.18315 3.13762C0.657899 4.69145 0.186339 6.56996 0.0855228 8.69032C-0.0152934 10.5191 0.000967329 12.3314 0.000967329 14.1569C0.000967329 15.9824 -0.0152934 17.7979 0.0855228 19.6234C0.186339 21.7438 0.661151 23.6256 2.18315 25.1761C3.7084 26.7299 5.55236 27.2103 7.63373 27.313C9.42891 27.4158 11.2078 27.3992 12.9998 27.3992C14.7949 27.3992 16.5739 27.4158 18.3658 27.313C20.4472 27.2103 22.2944 26.7266 23.8164 25.1761C25.3416 23.6223 25.8132 21.7438 25.914 19.6234C26.0181 17.7979 25.9985 15.9857 25.9985 14.1569ZM12.9965 20.952C9.30533 20.952 6.32637 17.9172 6.32637 14.1569C6.32637 10.3965 9.30533 7.36178 12.9965 7.36178C16.6877 7.36178 19.6666 10.3965 19.6666 14.1569C19.6666 17.9172 16.6877 20.952 12.9965 20.952ZM19.9398 8.67044C19.078 8.67044 18.382 7.96144 18.382 7.08348C18.382 6.20552 19.078 5.49653 19.9398 5.49653C20.8016 5.49653 21.4976 6.20552 21.4976 7.08348C21.4978 7.29196 21.4577 7.49844 21.3795 7.69109C21.3013 7.88375 21.1866 8.0588 21.0419 8.20621C20.8972 8.35363 20.7254 8.47051 20.5363 8.55017C20.3471 8.62983 20.1445 8.6707 19.9398 8.67044Z"
        fill={fill}
      />
    </svg>
  );
};

export default Instagrams;
