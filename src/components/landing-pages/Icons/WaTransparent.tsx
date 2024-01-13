const WaTransparent = ({className} : any) => {
  return (
    <svg
     className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M12.5 1C6.15477 1 1 6.15477 1 12.5C1 14.5395 1.55934 16.4429 2.49219 18.1045L1.01855 23.3652C0.995012 23.4494 0.993948 23.5383 1.01547 23.623C1.03699 23.7077 1.08035 23.7853 1.14121 23.8481C1.20207 23.9108 1.27832 23.9565 1.36235 23.9806C1.44638 24.0047 1.53526 24.0063 1.62012 23.9854L7.10547 22.626C8.71731 23.4865 10.5463 24 12.5 24C18.8452 24 24 18.8452 24 12.5C24 6.15477 18.8452 1 12.5 1ZM12.5 2C18.3048 2 23 6.69523 23 12.5C23 18.3048 18.3048 23 12.5 23C10.639 23 8.89606 22.5148 7.38086 21.667C7.27004 21.6051 7.13982 21.5876 7.0166 21.6182L2.21289 22.8086L3.50098 18.2129C3.51941 18.1479 3.5245 18.0799 3.51594 18.013C3.50738 17.946 3.48535 17.8815 3.45117 17.8232C2.53034 16.2618 2 14.4451 2 12.5C2 6.69523 6.69523 2 12.5 2ZM8.32129 6.5C8.00077 6.5 7.54302 6.61925 7.16699 7.02441C6.94113 7.26777 6 8.18476 6 9.79688C6 11.4776 7.1657 12.9279 7.30664 13.1143H7.30762V13.1152C7.29425 13.0977 7.48652 13.3761 7.74316 13.71C7.99981 14.0438 8.3587 14.4823 8.80957 14.957C9.71131 15.9065 10.9791 17.0037 12.5527 17.6748C13.2774 17.9834 13.8491 18.1697 14.2822 18.3057C15.0849 18.5577 15.816 18.5194 16.3652 18.4385C16.7763 18.3779 17.2284 18.1806 17.6758 17.8975C18.1231 17.6144 18.5615 17.2624 18.7549 16.7275C18.8934 16.3441 18.9638 15.9898 18.9893 15.6982C19.002 15.5525 19.0036 15.4238 18.9941 15.3047C18.9847 15.1856 18.9948 15.0943 18.8838 14.9121C18.651 14.5299 18.3874 14.5199 18.1123 14.3838C17.9595 14.3081 17.5243 14.0957 17.0879 13.8877C16.6519 13.68 16.2745 13.496 16.042 13.4131C15.8951 13.3602 15.7158 13.2842 15.457 13.3135C15.1983 13.3428 14.9427 13.5295 14.7939 13.75C14.6529 13.959 14.0852 14.6292 13.9121 14.8262C13.9098 14.8248 13.9248 14.8317 13.8564 14.7979C13.6424 14.6919 13.3806 14.6018 12.9932 14.3975C12.6058 14.1931 12.1211 13.8913 11.5908 13.4238V13.4229C10.8015 12.728 10.2486 11.8556 10.0742 11.5625C10.086 11.5485 10.0728 11.5655 10.0977 11.541L10.0986 11.54C10.2769 11.3645 10.4349 11.1548 10.5684 11.001C10.7576 10.7829 10.8412 10.5907 10.9316 10.4111C11.112 10.0532 11.0116 9.65937 10.9072 9.45215V9.45117C10.9144 9.46551 10.8508 9.32508 10.7822 9.16309C10.7135 9.00063 10.6258 8.79002 10.5322 8.56543C10.345 8.11625 10.136 7.61246 10.0117 7.31738V7.31641C9.8653 6.96884 9.6672 6.71845 9.4082 6.59766C9.14921 6.47686 8.92039 6.5112 8.91113 6.51074H8.91016C8.72533 6.50222 8.52252 6.5 8.32129 6.5ZM8.32129 7.5C8.51406 7.5 8.70411 7.50235 8.86328 7.50977C9.02703 7.51793 9.01684 7.5186 8.98535 7.50391C8.95336 7.48899 8.99677 7.48414 9.08984 7.70508C9.21155 7.99401 9.42159 8.49962 9.60938 8.9502C9.70327 9.17548 9.79115 9.38691 9.86133 9.55273C9.93151 9.71856 9.96954 9.81115 10.0137 9.89941V9.90039L10.0146 9.90137C10.0579 9.98674 10.0541 9.93208 10.0391 9.96191C9.93355 10.1713 9.91923 10.2227 9.8125 10.3457C9.64999 10.5329 9.48423 10.7417 9.39648 10.8281C9.31972 10.9035 9.18121 11.021 9.09473 11.251C9.00811 11.4813 9.04854 11.7973 9.1875 12.0332C9.37252 12.3473 9.9822 13.3397 10.9297 14.1738C11.5264 14.6998 12.0823 15.048 12.5264 15.2822C12.9705 15.5165 13.3322 15.6533 13.4131 15.6934C13.6053 15.7885 13.8153 15.8623 14.0596 15.833C14.3038 15.8037 14.5144 15.6555 14.6484 15.5039L14.6494 15.5029C14.8278 15.3007 15.3579 14.6954 15.6123 14.3223C15.6231 14.3261 15.6196 14.3231 15.7041 14.3535V14.3545H15.7051C15.7437 14.3682 16.2271 14.5846 16.6582 14.79C17.0893 14.9954 17.5268 15.2089 17.6689 15.2793C17.8741 15.3808 17.9711 15.4469 17.9961 15.4473C17.9978 15.4913 17.9995 15.5389 17.9932 15.6113C17.9756 15.8121 17.9219 16.0901 17.8145 16.3877C17.7618 16.5334 17.4875 16.8338 17.1416 17.0527C16.7957 17.2716 16.3747 17.4263 16.2188 17.4492C15.7499 17.5183 15.1933 17.5435 14.582 17.3516C14.1582 17.2185 13.6297 17.0463 12.9453 16.7549C11.5574 16.163 10.3778 15.1558 9.53516 14.2686C9.11384 13.825 8.77628 13.412 8.53613 13.0996C8.29643 12.7878 8.19176 12.6255 8.10449 12.5107L8.10352 12.5098C7.9486 12.3049 7 10.9854 7 9.79688C7 8.53899 7.58425 8.04572 7.90039 7.70508C8.06636 7.52625 8.24781 7.5 8.32129 7.5Z"
        fill="white"
      />
    </svg>
  );
};

export default WaTransparent;
