// visa
// inicia com 4 seguido de mais 15 dígitos
4234234423432344
// ^4\d{0,15}

// master
// inicia com 5, seguido de um dígito entre 1 e 5, seguido de 0 ou mais 2 dígitos - /^5[1-5]\d{0,2}
// OU
// inicia com 22, seguido de um dígito entre 2 e 9, seguido de 0 ou mais 1 dígito - 22[2-9]\d{0,1}
// OU
// inicia com 2, seguido de um dígito entre 3 e 7, seguido de 0 ou mais 2 dígitos - 2[3-7]\d[0,2]
// seguido de mais 12 dígitos - /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/
5353535353535353
2323232323232323
2234344655455664

// American express
// ^3[47][0-9]{13}$
