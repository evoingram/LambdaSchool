"""CPU functionality."""

import sys

class CPU:
    """Main CPU class."""

    def __init__(self):
        """Construct a new CPU."""
        self.pc = 0
        self.register = [0] * 8
        self.ram = [0] * 256
        self.bt = {}
        self.register_binary = ""

    def set_bt_register(self, register_code):
        if register_code == "ADD":
            self.register_binary == int('0b' + "10100000")
            self.bt[self.register_binary] = self.cpu_add
        elif register_code == "SUB":
            self.register_binary == int('0b' + "10100011")
            self.bt[self.register_binary] = self.cpu_subtract
        elif register_code == "MUL":
            self.register_binary == int('0b' + "10100010")
            self.bt[self.register_binary] = self.cpu_multiply
        elif register_code == "DIV":
            self.register_binary == int('0b' + "10100011")
            self.bt[self.register_binary] = self.cpu_divide
        elif register_code == "PRN":
            self.register_binary == int('0b' + "01000111")
            self.bt[self.register_binary] = self.cpu_prn
        elif register_code == "LDI":
            self.register_binary == int('0b' + "10000010")
            self.bt[self.register_binary] = self.cpu_ldi
        else:
            pass
        
    def cpu_add(self, operand_a, operand_b):
        self.alu("ADD", operand_a, operand_b)
        self.pc +=3
    
    def cpu_subtract(self, operand_a, operand_b):
        self.alu("SUB", operand_a, operand_b)
        self.pc += 3
    
    def cpu_multiply(self, operand_a, operand_b):
        self.alu("MUL", operand_a, operand_b)
        self.pc += 3

    def cpu_divide(self, operand_a, operand_b):
        self.alu("DIV", operand_a, operand_b)
        self.pc += 3

    def cpu_prn(self, operand_a, operand_b):
        print(f"operand_a = {self.register[operand_a]}")
        print(f"operand_b = {self.register[operand_b]}")
        self.pc +=2
    
    def cpu_ldi(self, operand_a, operand_b):
        self.register[operand_a] = operand_b
        self.pc += 3

    def dispatcher(self, instruction_register, operand_a, operand_b):
        self.bt[instruction_register](operand_a, operand_b)

    def load(self):
        """Load a program into memory."""

        if len(sys.argv) is not 2:
            print(f"{sys.argv[0]} is running")
            sys.exit(1)

        try:

            address = 0
            program_name = sys.argv[1]

            with open(program_name) as new_file:
                for single_line in new_file:
                    x = single_line.split("#", 1)[0]
                    if x.strip() == "": 
                        continue
                    x = '0b' + x
                    self.ram[address] = int(x, 2)
                    address += 1
                    
            
            print(self.ram)

        except FileNotFoundError:
            print(f"{sys.argv[0]}   |   {sys.argv[1]}:  file not found")
            sys.exit(2)


        # For now, we've just hardcoded a program:

        # program = [
        #     # From print8.ls8
        #     0b10000010, # LDI R0,8
        #     0b00000000,
        #     0b00001000,
        #     0b01000111, # PRN R0
        #     0b00000000,
        #     0b00000001, # HLT
        # ]

        # for instruction in program_name:
        #     self.ram[address] = instruction
        #     address += 1

    def alu(self, op, reg_a, reg_b):
        """ALU operations."""

        if op == "ADD":
            self.register[reg_a] += self.register[reg_b]
        elif op == "SUB":
            self.register[reg_a] -= self.register[reg_b]
        elif op == "MUL":
            self.register[reg_a] *= self.reg[reg_b]
        elif op == "DIV":
            self.register[reg_a] /= self.reg[reg_b]
        else:
            raise Exception("Unsupported ALU operation")

    def trace(self):
        """
        Handy function to print out the CPU state. You might want to call this
        from run() if you need help debugging.
        """

        print(f"TRACE: %02X | %02X %02X %02X |" % (
            self.pc,
            #self.fl,
            #self.ie,
            self.ram_read(self.pc),
            self.ram_read(self.pc + 1),
            self.ram_read(self.pc + 2)
        ), end='')

        for i in range(8):
            print(" %02X" % self.reg[i], end='')

        print()

    def run(self):
        """Run the CPU."""
        running = True
        while running:

            # It needs to read the memory address that's stored in register PC, and store that result in IR, the Instruction Register.
                # This can just be a local variable in run().
            instruction_register = self.ram_read(self.pc)

            # Using ram_read(), read the bytes at PC+1 and PC+2 from RAM into variables operand_a and operand_b in case the instruction needs them.
            operand_a = self.ram_read(instruction_register + 1)
            operand_b = self.ram_read(instruction_register + 2)


            HLT = int(0b00000001)
            LDI = int(0b10000010)
            PRN = int(0b01000111)
            ADD = int(0b10100000)
            SUB = int(0b10100011)
            MUL = int(0b10100010)
            DIV = int(0b10100011)
            
            # program_code_to_run = self.ram[instruction_register]

            # Then, depending on the value of the opcode, perform the actions needed for the instruction per the LS-8 spec.
                # Maybe an if-elif cascade...? There are other options, too.
                
            if self.ram[instruction_register] == ADD:
                program_code_to_run = "ADD"
            elif self.ram[instruction_register] == SUB:
                program_code_to_run = "SUB"
            elif self.ram[instruction_register] == MUL:
                program_code_to_run = "MUL"
            elif self.ram[instruction_register] == DIV:
                program_code_to_run = "DIV"
            elif self.ram[instruction_register] == HLT:
                program_code_to_run = "HLT"
            elif self.ram[instruction_register] == PRN:
                program_code_to_run = "PRN"
            elif self.ram[instruction_register] == LDI:
                program_code_to_run = "LDI"
            return self.set_bt_register(program_code_to_run)

            # halt code 
            # if program_code_to_run == HLT:
            #     print("Halting!")
            #     running = False
                

            # Some instructions requires up to the next two bytes of data after the PC in memory to perform operations on.
            # Sometimes the byte value is a register number, other times it's a constant value (in the case of LDI).

            # After running code for any particular instruction, the PC needs to be updated to point to the next instruction for the next iteration of the loop in run().

            # elif program_code_to_run == LDI:
            #     self.register[operand_a] = operand_b
            #     self.pc += 3

            # elif program_code_to_run == PRN:
            #     print(f'{self.register[operand_a]}')
            #     self.pc += 2
            
    def ram_read(self, address):
        # should accept the address to read and return the value stored there.
        address_value = self.ram[address]
        return address_value

    def ram_write(self, address, value):
        # should accept a value to write and the address to write it to.
        self.ram[address] = value


cpu = CPU()
cpu.load()
