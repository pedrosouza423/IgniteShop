import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={130}
      height={52}
      viewBox="0 0 130 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M62.279 6.468c0-.596.195-1.089.596-1.479.401-.39.951-.584 1.64-.584.675 0 1.226.195 1.627.584.401.39.607.883.607 1.479 0 .608-.206 1.1-.619 1.49-.412.39-.951.585-1.627.585-.677 0-1.215-.195-1.628-.585-.39-.378-.596-.882-.596-1.49zm4.241 18.81h-4V10.332h4V25.28zM68.801 17.702c0-2.293.55-4.138 1.64-5.537 1.088-1.398 2.556-2.098 4.413-2.098 1.639 0 2.911.562 3.828 1.685l.16-1.41h3.623v14.444c0 1.307-.298 2.442-.894 3.416a5.759 5.759 0 01-2.51 2.212c-1.078.505-2.339.757-3.783.757-1.1 0-2.167-.218-3.198-.654-1.043-.435-1.823-.997-2.362-1.696l1.766-2.43c.997 1.112 2.2 1.673 3.622 1.673 1.055 0 1.88-.286 2.476-.848.585-.562.883-1.364.883-2.407v-.803c-.917 1.044-2.133 1.56-3.634 1.56-1.8 0-3.244-.7-4.356-2.11-1.112-1.398-1.662-3.267-1.662-5.582v-.172H68.8zm3.99.286c0 1.353.275 2.42.813 3.187.539.768 1.284 1.158 2.236 1.158 1.215 0 2.086-.459 2.613-1.364v-6.293c-.539-.918-1.398-1.364-2.579-1.364-.963 0-1.708.39-2.258 1.18-.55.768-.826 1.949-.826 3.496zM88.77 10.331l.126 1.731c1.066-1.33 2.499-2.006 4.298-2.006 1.582 0 2.763.47 3.531 1.399.768.928 1.17 2.315 1.192 4.172v9.652h-3.989v-9.56c0-.848-.183-1.456-.55-1.846-.367-.378-.986-.573-1.834-.573-1.124 0-1.96.481-2.522 1.433v10.534h-3.99V10.331h3.738zM100.485 6.468c0-.596.195-1.089.596-1.479.401-.39.951-.584 1.639-.584.676 0 1.227.195 1.628.584.401.39.607.883.607 1.479 0 .608-.206 1.1-.619 1.49-.412.39-.951.585-1.627.585-.677 0-1.215-.195-1.628-.585-.39-.378-.596-.882-.596-1.49zm4.241 18.81h-4V10.332h4v14.948zM112.372 6.663v3.668h2.556v2.923h-2.556v7.463c0 .55.103.951.321 1.192.206.24.619.355 1.215.355a6.91 6.91 0 001.169-.092V25.2a8.175 8.175 0 01-2.418.355c-2.797 0-4.23-1.41-4.276-4.241v-8.047h-2.178v-2.923h2.178V6.674h3.989v-.011zM123.595 25.554c-2.19 0-3.978-.676-5.353-2.017-1.376-1.342-2.064-3.13-2.064-5.377v-.39c0-1.501.287-2.842.871-4.023.585-1.18 1.399-2.098 2.465-2.74 1.066-.641 2.281-.962 3.634-.962 2.04 0 3.656.642 4.826 1.937 1.169 1.284 1.765 3.118 1.765 5.48v1.627h-9.514c.126.974.516 1.754 1.169 2.35.653.584 1.467.882 2.464.882 1.536 0 2.74-.561 3.6-1.673l1.96 2.2c-.596.849-1.41 1.514-2.43 1.984-1.009.481-2.144.722-3.393.722zm-.447-12.277c-.791 0-1.433.264-1.926.803-.493.538-.802 1.306-.951 2.304h5.548v-.321c-.023-.883-.253-1.57-.723-2.064-.458-.481-1.111-.722-1.948-.722z"
        fill="#fff"
      />
      <path
        opacity={0.5}
        d="M52.016.351l-12.73 47.532a.285.285 0 01-.475.13L30.29 39.49l6.386-23.82a.275.275 0 00-.345-.345L12.51 21.71l-8.479-8.479a.285.285 0 01.13-.475L51.67.007c.215-.044.41.15.345.344z"
        fill="#00B37E"
      />
      <path
        opacity={0.5}
        d="M30.288 39.49L27.01 51.788a.285.285 0 01-.475.13L.082 25.488a.285.285 0 01.13-.475L12.51 21.71 30.289 39.49z"
        fill="#00B37E"
      />
      <path
        d="M36.675 15.67L30.29 39.49 12.51 21.71l23.82-6.386c.216-.065.41.13.345.345z"
        fill="#00B37E"
      />
      <path
        d="M67.622 45.631c0-.206-.046-.398-.138-.573-.087-.181-.268-.344-.545-.489-.271-.15-.68-.279-1.228-.388a9.647 9.647 0 01-1.25-.348 3.78 3.78 0 01-.945-.489 2.042 2.042 0 01-.59-.675 1.896 1.896 0 01-.208-.907c0-.33.072-.643.215-.938.148-.295.355-.556.622-.783.27-.228.596-.406.974-.535a3.9 3.9 0 011.267-.194c.665 0 1.233.119 1.703.357.471.238.832.555 1.083.953.25.393.376.83.376 1.31h-1.42c0-.232-.07-.457-.207-.674a1.535 1.535 0 00-.591-.55c-.256-.145-.57-.217-.944-.217-.394 0-.714.062-.96.186-.24.119-.417.271-.53.457a1.161 1.161 0 00-.084 1.008.92.92 0 00.292.334c.138.098.333.19.583.279.25.088.57.175.96.263.68.155 1.24.341 1.68.559.44.217.768.483.983.798.215.316.322.698.322 1.148a2.23 2.23 0 01-.883 1.799c-.281.217-.619.387-1.013.512a4.482 4.482 0 01-1.312.178c-.732 0-1.35-.132-1.857-.396-.507-.263-.89-.604-1.151-1.023a2.468 2.468 0 01-.392-1.326h1.428c.02.393.133.706.337.938.205.228.456.39.752.489.297.093.591.14.883.14.389 0 .714-.053.975-.156.266-.103.468-.245.606-.426a.995.995 0 00.207-.62zM72.327 35.947v11.91h-1.42v-11.91h1.42zm-.338 7.397l-.59-.023c.004-.574.089-1.104.252-1.59.164-.49.394-.917.691-1.28.297-.361.65-.64 1.06-.837a3.099 3.099 0 011.373-.302c.41 0 .778.057 1.105.17.328.11.607.285.837.528.235.243.414.558.537.946.123.382.184.85.184 1.403v5.498h-1.427v-5.513c0-.44-.064-.791-.192-1.055a1.187 1.187 0 00-.56-.581c-.246-.124-.548-.186-.906-.186-.353 0-.675.075-.967.224-.287.15-.535.357-.745.62a3.132 3.132 0 00-.483.908 3.345 3.345 0 00-.169 1.07zM79.188 43.755v-.178c0-.605.087-1.166.261-1.683a4.01 4.01 0 01.752-1.357 3.359 3.359 0 011.19-.9 3.661 3.661 0 011.565-.325 3.68 3.68 0 011.574.326c.47.212.87.511 1.197.9.332.382.586.834.76 1.356.174.517.26 1.078.26 1.683v.178c0 .605-.086 1.166-.26 1.682-.174.518-.427.97-.76 1.358a3.485 3.485 0 01-1.19.899c-.46.212-.982.318-1.565.318a3.757 3.757 0 01-1.574-.318 3.564 3.564 0 01-1.197-.9 4.112 4.112 0 01-.752-1.356 5.245 5.245 0 01-.26-1.683zm1.42-.178v.178c0 .419.048.814.146 1.186.097.367.243.693.437.977.2.285.448.51.745.675.296.16.642.24 1.036.24.389 0 .729-.08 1.02-.24.297-.166.543-.39.737-.675.195-.284.34-.61.438-.977.102-.372.153-.767.153-1.186v-.178c0-.414-.051-.804-.153-1.171a3.03 3.03 0 00-.445-.985 2.123 2.123 0 00-.737-.682 2.05 2.05 0 00-1.029-.248c-.389 0-.731.082-1.028.248a2.216 2.216 0 00-.737.682c-.194.284-.34.613-.437.985a4.557 4.557 0 00-.146 1.17zM89.948 41.08v10.002h-1.427V39.467h1.304l.123 1.613zm5.595 2.512v.163c0 .61-.072 1.176-.215 1.698a4.194 4.194 0 01-.63 1.35c-.27.382-.605.679-1.005.89-.399.213-.857.319-1.373.319-.527 0-.993-.088-1.397-.264a2.758 2.758 0 01-1.029-.767 3.931 3.931 0 01-.675-1.21c-.164-.47-.276-1-.338-1.59v-.868c.062-.62.177-1.176.346-1.667.168-.491.391-.91.667-1.256a2.746 2.746 0 011.021-.799c.4-.186.86-.279 1.382-.279.522 0 .984.103 1.389.31.404.202.744.491 1.02.869.277.377.484.83.622 1.356.143.523.215 1.104.215 1.745zm-1.428.163v-.163a5.1 5.1 0 00-.13-1.178 2.997 2.997 0 00-.407-.977 1.947 1.947 0 00-.69-.667c-.282-.166-.617-.248-1.006-.248-.358 0-.67.062-.936.186-.261.124-.484.292-.668.504a2.68 2.68 0 00-.453.713 4.127 4.127 0 00-.253.822v2.008c.102.362.246.703.43 1.024.184.315.43.57.737.767.307.192.693.287 1.158.287.384 0 .714-.08.99-.24.282-.166.512-.39.691-.675.184-.284.32-.61.407-.977a5.2 5.2 0 00.13-1.186z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
