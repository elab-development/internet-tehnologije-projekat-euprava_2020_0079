# OPIS APLIKACIJE
Potrebno je kreirati sistem e-uprave koji omogućava registraciju i prijavljivanje korisnika, kao i pregled i pretragu različitih usluga i zahteva. Korisnik se može registrovati i prijaviti u sistem, gde prilikom registracije unosi osnovne podatke kao što su ime, prezime, JMBG, broj lične karte, adresu prebivališta i slično. Nakon registracije, korisnik može da se prijavi i pristupi svojim informacijama, kao i da pregleda različite usluge koje pruža e-uprava. Ove usluge uključuju različite administrativne i birokratske procese. Korisnik može podneti zahtev za određenu uslugu, gde se svaki zahtev beleži sa informacijama kao što su status zahteva, prioritet, rok obrade i dodatne napomene. Dodatno, postoji funkcionalnost za izvoz podataka o korisnicima u CSV format, što omogućava lakši pregled i analizu korisničkih podataka. Aplikacija nudi i opciju za pretragu korisnika na osnovu određenih kriterijuma kao što su mesto rođenja, opština prebivališta i datum rođenja, što olakšava lociranje specifičnih korisničkih profila. Na kraju, korisnici imaju opciju da se odjave iz sistema kada završe sa korišćenjem aplikacije.

# POKRETANJE APLIKACIJE 

## LARAVEL

    cd laravelApp
    php artisan migrate  --seed
    php artisan serve
    
## REACT
    cd front
    npm start
