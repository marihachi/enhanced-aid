# enhanced-aid
A implement of enhanced AID (EAID)

## Specification
### Description
#### timestamp part
The timestamp part is base36 string made from unixtime in milliseconds.
It must have 9 charactors.

#### random part
The random part is base36 string made from random value.
It must have 15 charactors.

### EAID12
- timestamp part (9 characters)
- random part (3 characters)
### EAID16
- timestamp part (9 characters)
- random part (7 characters)
### EAID24
- timestamp part (9 characters)
- random part (15 characters)
### EAID32
- timestamp part (9 characters)
- random part (23 characters)

## License
MIT Licensed
