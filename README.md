# enhanced-aid
A implement of enhanced AID (EAID)  
Inspired by syuilo's AID.  

## Specification
### Description
The format of the enhanced AID consists of timestamp part and random part.  
The enhanced AID have some variations of specifications.  

```
+--------------------+--------------------+
|   timestamp part   |     random part    |
+--------------------+--------------------+
```

#### timestamp part
The timestamp part is base36 string made from unixtime in milliseconds.  
It must have 9 charactors in the all specifications.  

#### random part
The random part is base36 string made from random value.  
It must be an appropriate length of string for the target Specification(e.g. EAID12, EAID24).  

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
