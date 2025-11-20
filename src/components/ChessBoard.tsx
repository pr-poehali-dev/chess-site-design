import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn' | null;
type PieceColor = 'white' | 'black';

interface Piece {
  type: PieceType;
  color: PieceColor;
}

const pieceSymbols: Record<string, string> = {
  'white-king': '♔',
  'white-queen': '♕',
  'white-rook': '♖',
  'white-bishop': '♗',
  'white-knight': '♘',
  'white-pawn': '♙',
  'black-king': '♚',
  'black-queen': '♛',
  'black-rook': '♜',
  'black-bishop': '♝',
  'black-knight': '♞',
  'black-pawn': '♟',
};

const initialBoard: (Piece | null)[][] = [
  [
    { type: 'rook', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'queen', color: 'black' },
    { type: 'king', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'rook', color: 'black' },
  ],
  Array(8).fill({ type: 'pawn', color: 'black' }),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill({ type: 'pawn', color: 'white' }),
  [
    { type: 'rook', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'queen', color: 'white' },
    { type: 'king', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'rook', color: 'white' },
  ],
];

const ChessBoard = () => {
  const [board] = useState<(Piece | null)[][]>(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      setSelectedSquare(null);
    } else if (board[row][col]) {
      setSelectedSquare([row, col]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Онлайн-игра</h3>
            <p className="text-muted-foreground">Играйте против других шахматистов</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="RotateCcw" size={20} className="mr-2" />
              Новая игра
            </Button>
            <Button variant="outline">
              <Icon name="Flag" size={20} className="mr-2" />
              Сдаться
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="aspect-square bg-card border-2 border-border rounded-lg overflow-hidden shadow-xl">
              {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex" style={{ height: '12.5%' }}>
                  {row.map((piece, colIndex) => {
                    const isLight = (rowIndex + colIndex) % 2 === 0;
                    const isSelected = selectedSquare?.[0] === rowIndex && selectedSquare?.[1] === colIndex;
                    
                    return (
                      <div
                        key={colIndex}
                        onClick={() => handleSquareClick(rowIndex, colIndex)}
                        className={`
                          flex items-center justify-center cursor-pointer transition-all
                          ${isLight ? 'bg-amber-100' : 'bg-amber-800'}
                          ${isSelected ? 'ring-4 ring-primary' : ''}
                          hover:opacity-80
                        `}
                        style={{ width: '12.5%' }}
                      >
                        {piece && (
                          <span className={`text-4xl select-none ${piece.color === 'white' ? 'text-white drop-shadow-lg' : 'text-gray-900'}`}>
                            {pieceSymbols[`${piece.color}-${piece.type}`]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-4 bg-secondary">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">⏱️ Время</span>
                <span className="text-2xl font-bold text-primary">10:00</span>
              </div>
            </Card>

            <Card className="p-4 bg-secondary">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="History" size={20} />
                История ходов
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {[
                  '1. e4 e5',
                  '2. Nf3 Nc6',
                  '3. Bb5 a6',
                  '4. Ba4 Nf6',
                ].map((move, i) => (
                  <div key={i} className="text-sm text-muted-foreground py-1 border-b border-border">
                    {move}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-secondary">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Users" size={20} />
                Игроки
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                      ВЫ
                    </div>
                    <span className="text-sm">Рейтинг: 1520</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                      ОП
                    </div>
                    <span className="text-sm">Рейтинг: 1485</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChessBoard;
