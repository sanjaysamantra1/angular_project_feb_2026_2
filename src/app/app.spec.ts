import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  // Test Suite
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should verify add function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.add(10, 20)).toBe(30);
    expect(app.add(10, -20)).toBe(-10);
    expect(app.add(-10, 20)).toBe(10);
    expect(app.add(-10, -20)).toBe(-30);
  });
  it('should verify sumofDigits function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.sumofDigits(125)).toBe(8);
  });
  it('should verify AddNewCar function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(2);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    expect(app.cars).not.toContain('Maruti');
    app.addNewCar('Maruti');
    expect(app.cars).toBeDefined();
    expect(app.cars).toBeInstanceOf(Array);
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('Toyota');
  });
});
