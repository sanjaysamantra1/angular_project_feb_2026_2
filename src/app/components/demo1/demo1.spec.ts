import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1 } from './demo1';

describe('Demo1', () => {
  let component: Demo1;
  let fixture: ComponentFixture<Demo1>;

  beforeAll(() => {
    console.log('Before All...'); // 1
  });

  beforeEach(async () => {
    console.log('Before Each...'); // N
    await TestBed.configureTestingModule({
      imports: [Demo1],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    console.log('After Each...'); // N
  });
  afterAll(() => {
    console.log('After All...'); // 1
  });

  it('should create', () => {
    console.log('It-1');
    expect(component).toBeTruthy();
  });
  it('should verify isEven()', () => {
    console.log('It-2');
    expect(component.isEven(2)).toBeTruthy();
    expect(component.isEven(3)).toBeFalsy();
  });
  it('should call processData with the correct data', () => {
    const processDataSpy = vi.spyOn(component, 'processData'); // Spy For processData function
    const result = component.fetchData();
    expect(processDataSpy).toHaveBeenCalled(); // Verify processData was called
    expect(processDataSpy).toHaveBeenCalledWith(['item1', 'item2', 'item3']); // Verify correct arguments
    expect(result).toBe(3); // Verify the return value
  });
  it('should test fetchUserData ', async () => {
    vi.spyOn(component, 'fetchuserData').mockResolvedValue([
      { name: 'laksheet', age: 25 },
      { name: 'sanjay', age: 55 },
    ]);

    let userResponse = await component.fetchuserData();
    expect(userResponse.length).toBe(2);
  });
});
