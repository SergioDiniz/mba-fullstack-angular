import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appMascara]'
})
export class MascaraDirective {

  @Output()
  onPressEnter: EventEmitter<any> = new EventEmitter();

  input: any;

  arrayNumber: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  arrayFunction: any[] = [, 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    console.log(this.el)
    console.log(this.el.nativeElement.name)
    // tslint:disable-next-line:triple-equals
    if (event.key == 'Enter') {
      this.onPressEnter.emit();
    } else if (this.arrayFunction.indexOf(event.key) < 0) {

      switch (this.el.nativeElement.name) {
        case 'cpf': this.el.nativeElement.value = this.convertToCpf(this.el.nativeElement.value);
                    break;
        case 'cep': this.el.nativeElement.value = this.convertToCEP(this.el.nativeElement.value);
                    break;
        case 'telefone': this.el.nativeElement.value = this.convertToTelefone(this.el.nativeElement.value);
                         break;
      }

    }
  }


  convertToCpf(num) {
    if (num) {
      num = num.toString();
      num = num.replace(/\D/g, '');
      switch (num.length) {
        case 4:
          num = num.replace(/(\d+)(\d{3})/, '$1.$2');
          break;
        case 5:
          num = num.replace(/(\d+)(\d{3})/, '$1.$2');
          break;
        case 6:
          num = num.replace(/(\d+)(\d{3})/, '$1.$2');
          break;
        case 7:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, '$1.$2.$3');
          break;
        case 8:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, '$1.$2.$3');
          break;
        case 9:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, '$1.$2.$3');
          break;
        case 10:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
          break;
        case 11:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
          break;
      }
    }
    return num;
  }


  convertToCEP(num) {
    if (num) {
      num = num.toString();
      num = num.replace(/\D/g, '');

      switch (num.length) {
        case 5:
          num = num.replace(/(\d+)/, '$1');
          break;
        case 6:
          num = num.replace(/(\d{5})(\d)/, '$1-$2');
          break;
        case 7:
          num = num.replace(/(\d{5})(\d)/, '$1-$2');
          break;
        case 8:
          num = num.replace(/(\d{5})(\d)/, '$1-$2');
          break;
      }
    }
    return num;
  }

  convertToTelefone(num) {
    if (num) {
      num = num.toString();
      num = num.replace(/\D/g, '');

      switch (num.length) {
        case 1:
          num = num.replace(/(\d+)/, '($1');
          break;
        case 2:
          num = num.replace(/(\d+)/, '($1) ');
          break;
        case 3:
          num = num.replace(/(\d{2})(\d{1})/, '($1) $2');
          break;
        case 4:
          num = num.replace(/(\d{2})(\d{2})/, '($1) $2');
          break;
        case 5:
          num = num.replace(/(\d{2})(\d{3})/, '($1) $2');
          break;
        case 6:
          num = num.replace(/(\d{2})(\d{4})/, '($1) $2');
          break;
        case 7:
          num = num.replace(/(\d{2})(\d{4})(\d{1})/, '($1) $2.$3');
          break;
        case 8:
          num = num.replace(/(\d{2})(\d{4})(\d{2})/, '($1) $2.$3');
          break;
        case 9:
          num = num.replace(/(\d{2})(\d{4})(\d{3})/, '($1) $2.$3');
          break;
        case 10:
          num = num.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2.$3');
          break;
        case 11:
          num = num.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2.$3');
          break;

      }
    }
    return num;
  }

}
